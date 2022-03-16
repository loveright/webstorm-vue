const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
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
                            limit: 8192
                        }
                    }
                ]
            }

        ],
    },
}