// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
/* eslint-disable no-undef */
// next.config.js

const path = require('path')

const cloudinaryBaseUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`;
module.exports = {
    runtime: 'experimental-edge',

    images: {
        loader: "cloudinary",
        path: cloudinaryBaseUrl,
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
    
    // externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],

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