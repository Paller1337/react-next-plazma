/**
 * Defaults desribed here
 */

export module DEFAULTS {
    export const URL = {
        BASE_URL: 'https://kplazma.ru',
        // CDN: 'https://cdn0.kplazma.ru'
        CDN: 'https://kplazma.ru'
    }

    export const AOS = {
        animation: 'fade-up',
        duration: '1000',
        once: 'true'
    }

    export const REGEX = {
        // eslint-disable-next-line max-len
        EMAIL_REGEX: /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    }

    export const MENU = {
        BANQUET: '/meals/menu', //'https://disk.yandex.ru/i/O15H5bA_ZSwh1A',
        REST: '/meals/menu', //'https://disk.yandex.ru/i/peP4mC-yM1HJqw',
        BAR: '/meals/menu', //'https://disk.yandex.ru/i/Ppnk2wOmcpd01Q',
    }

}

