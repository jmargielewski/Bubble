module.exports = {
    entry: ["./js/ui.js", "./js/bubble.js", "./js/game.js"],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
