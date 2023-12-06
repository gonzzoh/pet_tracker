const server = require('./server');

const PORT = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

server.listen(PORT, host, () => {
    console.log(`http://localhost:${PORT}`)
})