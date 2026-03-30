const { execSync } = require('child_process');
const path = require('path');

const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
const nodePath = 'C:\\Program Files\\nodejs\\node.exe';

try {
  const result = execSync(`"${nodePath}" "${vitePath}" build`, {
    encoding: 'utf8',
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log(result);
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
