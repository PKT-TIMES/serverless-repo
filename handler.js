const fs = require('fs');
const path = require('path');

module.exports.html = async (event) => {
  const filePath = path.join(__dirname, 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: htmlContent
  };
};
