const {createPorxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createPorxyMiddleware({
            target: process.env.proxyURL,
            changeOrigin: true,
        })
    );
};