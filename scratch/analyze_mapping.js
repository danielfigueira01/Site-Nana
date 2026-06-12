const fs = require('fs');
const path = require('path');

const imgDir = 'C:\\Users\\User\\Documents\\Site Nana\\imagens-produtos-nana-4x5-cortadas';
const files = fs.readdirSync(imgDir);

console.log('Files with "sublimado":', files.filter(f => f.toLowerCase().includes('sublimado')));
console.log('Files with "009":', files.filter(f => f.toLowerCase().includes('009')));
console.log('Files with "2613":', files.filter(f => f.toLowerCase().includes('2613')));
console.log('Files with "0081":', files.filter(f => f.toLowerCase().includes('0081')));
console.log('Files with "conjunto":', files.filter(f => f.toLowerCase().includes('conjunto')));
