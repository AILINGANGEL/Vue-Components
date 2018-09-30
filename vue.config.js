module.exports = {
    // chainWebpack: config => {
    //     // GraphQL Loader
    //     config.module.rule('scss')
    //         .test(/\.scss$/)
    //         .use('resolve-url-loader')
    //         .loader('resolve-url-loader')
    //         .before('sass-loader')
    // },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "@/styles/custom.scss";`
            }
        }
    }
}