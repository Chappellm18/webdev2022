// set the build output to ../docs/
module.exports = {
    outputDir: '../docs'
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.symlinks(false)
    }
}