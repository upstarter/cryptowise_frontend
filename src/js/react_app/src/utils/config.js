const APIV1 = '/v1'
const APIV2 = '/v2'

module.exports = {
    name: 'Cryptowise',
    prefix: 'Cryptowise',
    footerText: 'Cryptowise Footer',
    logo: null,
    iconFontCSS: '/public/iconfont.css',
    iconFontJS: '/public/iconfont.js',
    CORS: [],
    openPages: ['/'],
    apiPrefix: '/v1',
    APIV1,
    APIV2,
    api: {
        userLogin: `${APIV1}/user/login`,
        userLogout: `${APIV1}/user/logout`,
        userInfo: `${APIV1}/userInfo`,
        users: `${APIV1}/users`,
        posts: `${APIV1}/posts`,
        user: `${APIV1}/user/:id`,
        dashboard: `${APIV1}/dashboard`,
        menus: `${APIV1}/menus`,
        weather: `${APIV1}/weather`,
        v1test: `${APIV1}/test`,
        v2test: `${APIV2}/test`,
    },
}
