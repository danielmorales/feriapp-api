import app from './app';
// Importo la configuración del puerto
const config = require('./config/config')

async function main(){
    await app.listen(config.port);
    console.log('Server on port: ', config.port);
};

main();