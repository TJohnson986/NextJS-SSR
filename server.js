const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); 
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/second-page', (req, res) => {
        return app.render(req, res, '/second-page');
    })

    server.get('/third-page', (req, res) => {
        return app.render(req, res, '/third-page');
    })

    server.get('*', (req, res) => {
        return handler(req, res);
    })
    
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Ready on port ${port}`)
    })
})