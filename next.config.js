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
            'cloudflare-ipfs.com',
            'skin.klaun.ch',
            'repos.klaun.ch',
            'localhost',
            'klauncher.ru',
            'i.ytimg.com',
            'static-cdn.jtvnw.net',
            'media.forgecdn.net',
            'loremflickr.com',
            'lostmine.ru',
            'loremflickr.com',
            'fonts.googleapis.com'
        ]
    },

    output: 'standalone',

    i18n: {
        locales: ['ru'],
        defaultLocale: 'ru',
    },
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //     prependData: `@import "_config.sass"`
    // }
}