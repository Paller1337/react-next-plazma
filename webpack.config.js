module.exports = {
    module: {
        rules: [
            {
                test: /\.pdf$/,
                use: 'file-loader',
            },
        ],
    },
};
