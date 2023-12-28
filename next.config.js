/** @type {import('next').NextConfig} */

module.exports = {
    // reactStrictMode: true,
    // swcMinify: true,
    // assetPrefix: './',
    runtime: 'experimental-edge',
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.resolve.fallback.fs = false;
    //     }

    //     return config;
    // },

    images: {
        domains: [
            // 'localhost',
            'cdn0.kplazma.ru',
            // 'fonts.googleapis.com'
        ],
        // loader: 'custom',
        // loaderFile: './middleware/utils/imageLoader.js',
    },
    // output: 'standalone',

    // experimental: {
    //     outputStandalone: true,
    // },
    i18n: {
        locales: ['ru'],
        defaultLocale: 'ru',
    },
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //     prependData: `@import "_config.sass"`
    // }
    async redirects() {
        return [
            {
                source: '/%D0%BC%D0%B5%D0%BD%D1%8E-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%B0',
                destination: 'https://disk.yandex.ru/d/IQSMzn3UPA3ieA',
                permanent: true,
            },
            {
                source: '/aqua/:slug*',
                destination: '/aquatory',
                permanent: true,
            },
            {
                source: '/sauna/:slug/:path*',
                destination: '/sauna',
                permanent: true,
            },
            {
                source: '/rest/:slug*',
                destination: '/meals/restaurant',
                permanent: true,
            },
            {
                source: '/banket/:slug*',
                destination: '/meals/banquet-hall',
                permanent: true,
            },
            {
                source: '/%D0%BA%D0%B0%D1%84%D0%B5-smash',
                destination: '/meals/smash',
                permanent: true,
            },
            {
                source: '/%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C',
                destination: '/booking',
                permanent: true,
            },

            //Модульный домик
            {
                source: '/%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%BE%D0%B9',
                destination: '/hotel',
                permanent: true,
            },
            //Австрийский таунхаус
            {
                source: '/%D0%B0%D0%B2%D1%81%D1%82%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%82%D0%B0%D1%83%D0%BD%D1%85%D0%B0%D1%83%D1%81',
                destination: '/hotel',
                permanent: true,
            },
            //Делюкс на набережной
            {
                source: '/%D0%B4%D0%B5%D0%BB%D1%8E%D0%BA%D1%81-%D0%BD%D0%B0-%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%BE%D0%B9',
                destination: '/hotel',
                permanent: true,
            },
            {
                source: '/glhs',
                destination: 'https://c4.glhs.ru/pr/0b1d8440a7711c27d68ced7768526d4a/index',
                permanent: true,
            },
        ]
    },
}