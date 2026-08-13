#!/usr/bin/env node
/**
 * 通过 SSH 将 build 目录上传到自建 nginx 服务器。
 * 方案：本地 tar 打包 → SFTP 上传单个 tar.gz → 远程解压 → 清理
 *
 * 用法：node scripts/deploy-server.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const {execSync} = require('child_process');
const {Client} = require('ssh2');

const HOST = process.env.SSH_HOST || '140.210.195.243';
const PORT = 22;
const USER = process.env.SSH_USER || 'pika';
const PASSWORD = process.env.SSH_PASSWORD || 'yuyu#as@360';
const REMOTE_PATH = process.env.DEPLOY_PATH || '/home/pika/pika-doc';
const LOCAL_BUILD = path.resolve(__dirname, '..', 'build');

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pikiwidb-deploy-'));
const tarPath = path.join(tmpDir, 'build.tar.gz');

console.log('1. 打包 build 目录...');
execSync(`tar -czf "${tarPath}" -C "${LOCAL_BUILD}" .`, {stdio: 'inherit'});
const tarSize = fs.statSync(tarPath).size;
console.log(`   打包完成: ${(tarSize / 1024 / 1024).toFixed(2)} MB`);

const conn = new Client();
console.log(`2. 连接服务器 ${USER}@${HOST}...`);

conn.on('ready', () => {
  console.log('   ✅ SSH 连接成功');

  // 上传 tar.gz
  conn.sftp((sftpErr, sftp) => {
    if (sftpErr) {
      console.error('SFTP 错误:', sftpErr.message);
      conn.end();
      return;
    }

    const remoteTar = '/tmp/pikiwidb-build.tar.gz';
    console.log(`3. 上传 build.tar.gz (${(tarSize / 1024 / 1024).toFixed(2)} MB)...`);

    const rs = fs.createReadStream(tarPath);
    const ws = sftp.createWriteStream(remoteTar);
    let uploaded = 0;
    rs.on('data', (chunk) => {
      uploaded += chunk.length;
      process.stdout.write(`\r   上传中: ${(uploaded / 1024 / 1024).toFixed(2)} MB / ${(tarSize / 1024 / 1024).toFixed(2)} MB`);
    });
    ws.on('close', () => {
      console.log('\n   ✅ 上传完成');

      // 远程解压并替换
      console.log('4. 远程解压并替换旧文件...');
      const cmd = [
        `cd "${REMOTE_PATH}"`,
        // 保留 .git 目录，删除其他所有旧文件
        `find . -mindepth 1 -not -name ".git" -not -path "./.git/*" -not -path "./.git" -delete`,
        // 解压新文件
        `tar -xzf ${remoteTar} -C "${REMOTE_PATH}"`,
        // 确保 .nojekyll 存在
        `touch "${REMOTE_PATH}/.nojekyll"`,
        // 清理临时文件
        `rm -f ${remoteTar}`,
        // 验证
        `ls -la "${REMOTE_PATH}/" | head -15`,
      ].join(' && ');

      conn.exec(cmd, (execErr, stream) => {
        if (execErr) {
          console.error('解压失败:', execErr.message);
          conn.end();
          return;
        }
        let out = '';
        stream.on('data', (d) => (out += d));
        stream.stderr.on('data', (d) => (out += d));
        stream.on('close', () => {
          console.log(out);
          console.log(`\n🎉 部署完成！网站: https://www.pikiwidb.com/`);
          // 清理本地临时文件
          fs.rmSync(tmpDir, {recursive: true, force: true});
          conn.end();
        });
      });
    });
    ws.on('error', (e) => {
      console.error('\n上传失败:', e.message);
      conn.end();
    });
    rs.pipe(ws);
  });
}).on('error', (e) => {
  console.error('❌ SSH 连接失败:', e.message);
  process.exit(1);
}).connect({host: HOST, port: PORT, username: USER, password: PASSWORD, readyTimeout: 30000});
