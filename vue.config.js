// module.exports = {
//     configureWebpack: config => {
//         require('vux-loader').merge(config, {
//             options: {},
//             plugins: ['vux-ui']
//         })
//     }
// }
module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8080,
        // open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://api.xchmm.yiidev.cn/v1', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}