const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const obfuscateFiles = async () => {
  const directoryPath = path.resolve(__dirname, 'build/static/js');
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.resolve(directoryPath, file);
    const code = fs.readFileSync(filePath, 'utf8');
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code).getObfuscatedCode();

    fs.writeFileSync(filePath, obfuscatedCode, 'utf8');
  });

  console.log('JavaScript files obfuscated successfully!');
};

obfuscateFiles();
