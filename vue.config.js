module.exports = {
    outputDir: 'test', //输出文件目录dist
    publicPath: './',
    assetsDir: './static',
    productionSourceMap: false, //是否生成.map
    devServer: {
        host: "0.0.0.0",
        port: 8080, //端口号
        https: false, //Boolean
        open: false, //自动启动浏览器
        hotOnly: true, //热更新
        proxy: {
            "/test": {
                target: 'http://192.168.31.62:6003/',
                changeOrigin: true, //允许跨域
                ws: true, //websocket支持
                pathRewrite: { //表示需要rewrite重写的
                    '^/test': ''
                }
            }
        }
    }
}