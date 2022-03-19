const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            //css-loader只负责加载css文件
            //style-loader渲染dom
            {
                test: /\.css$/,
                //位置不能换
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于limit时，会将图片编译成base64
                            //当加载的图片大于limit时，需要使用file-loader模块进行加载
                            limit: 3000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use: ['vue-loader']
            }

        ],
    },
    resolve: {
        //别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}