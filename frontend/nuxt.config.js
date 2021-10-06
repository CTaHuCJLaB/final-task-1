const isProduction = process.env.NODE_ENV === 'production';
const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export default {
    ssr: true,

    target: 'server',

    env: {
        baseURL: API_URL,
    },

    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type); // чтобы шрифты тоже в head добавлял (link preload)
            },
        },

        // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#http2
        http2: {
            push: true,
            pushAssets: (req, res, publicPath, preloadFiles) => {
                return preloadFiles
                    // .filter(f => f.asType === 'script' && f.file === 'runtime.js')
                    .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`);
            },
        },
    },
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', content: '#131313' },
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/png', href: '/img/favicon.png' },
        ],
    },

    loading: {
        color: '#000',
        failedColor: '#e33b3b',
        height: '3px',
    },

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
            '~/assets/scss/_mixins.scss',
            '~/assets/scss/_extends.scss',
        ],
    },

    css: [
        '@/assets/scss/main.scss',
    ],

    plugins: [
        '@/plugins/noClickOutline.js',
    ],

    components: true,

    buildModules: isProduction
        ? []
        : [
            '@nuxtjs/eslint-module',
            '@nuxtjs/stylelint-module',
            '@nuxtjs/composition-api/module',
        ],

    modules: [
        '@nuxtjs/markdownit',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: API_URL,
    },

    markdownit: {
        runtime: true,
    },

    build: {
        transpile: [
            'vee-validate/dist/rules',
        ],
        terser: {
            parallel: !isProduction, // настройка для хостинга, иначе сборка падает
        },
        // optimization: {
        //     runtimeChunk: 'single',
        //     splitChunks: {
        //         chunks: 'all',
        //         maxInitialRequests: Infinity,
        //         minSize: 0,
        //         cacheGroups: {
        //             vendor: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 name(module) {
        //                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
        //                     return `npm.${packageName.replace('@', '')}`;
        //                 },
        //             },
        //         },
        //     },
        // },
    },

    router: {
        linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-active-exact',
        prefetchLinks: false,
    },
};
