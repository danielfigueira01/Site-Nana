const fs = require('fs');
const https = require('https');

https.get('https://nanamodaintima.com.br/api/products', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        fs.writeFileSync('scratch/products_raw.json', data);
        console.log('Finished fetching. Bytes received:', data.length);
        try {
            const json = JSON.parse(data);
            console.log('Is array:', Array.isArray(json));
            console.log('Length:', json.length || (json.data && json.data.length));
            if (json.data) {
                console.log('Keys in json:', Object.keys(json));
                console.log('First product keys:', Object.keys(json.data[0]));
            } else if (Array.isArray(json)) {
                console.log('First product keys:', Object.keys(json[0]));
            }
        } catch (e) {
            console.log('Error parsing JSON:', e.message);
            console.log('Data sample:', data.slice(0, 300));
        }
    });
}).on('error', (err) => {
    console.error('Error fetching API:', err.message);
});
