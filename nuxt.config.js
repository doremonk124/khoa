export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900'},
            {rel: 'stylesheet', href: '/global_assets/css/icons/icomoon/styles.min.css'},
            {rel: 'stylesheet', href: '/assets/css/bootstrap.min.css'},
            {rel: 'stylesheet', href: '/assets/css/bootstrap_limitless.min.css'},
            {rel: 'stylesheet', href: '/assets/css/layout.min.css'},
            {rel: 'stylesheet', href: '/assets/css/components.min.css'},
            {rel: 'stylesheet', href: '/assets/css/colors.min.css'},
            {rel: 'stylesheet', href: '/assets/css/custom.css'},
        ],
        script: [
            {src: '/global_assets/js/main/jquery.min.js', body: true},
            {src: '/global_assets/js/main/bootstrap.bundle.min.js', body: true},
            {src: '/global_assets/js/plugins/loaders/blockui.min.js', body: true},
            {src: '/global_assets/js/plugins/visualization/d3/d3.min.js', body: true},
            {src: '/global_assets/js/plugins/visualization/d3/d3_tooltip.js', body: true},
            {src: '/global_assets/js/plugins/forms/inputs/inputmask.js', body: true},
            {src: '/global_assets/js/plugins/forms/styling/uniform.min.js', body: true},
            {src: '/global_assets/js/plugins/forms/inputs/autosize.min.js', body: true},
            {src: '/global_assets/js/plugins/forms/inputs/formatter.min.js', body: true},
            {src: '/global_assets/js/plugins/forms/inputs/maxlength.min.js', body: true},
            {src: '/global_assets/js/plugins/forms/inputs/autoNumeric.min.js', body: true},
            {src: '/global_assets/js/plugins/forms/styling/switchery.min.js', body: true},
            {src: '/global_assets/js/plugins/forms/selects/bootstrap_multiselect.js', body: true},
            {src: '/global_assets/js/plugins/forms/selects/select2.min.js', body: true},
            {src: '/global_assets/js/plugins/ui/moment/moment.min.js', body: true},
            {src: '/global_assets/js/plugins/pickers/daterangepicker.js', body: true},
            {src: '/global_assets/js/plugins/tables/footable/footable.min.js', body: true},
            {src: '/global_assets/js/plugins/uploaders/fileinput/fileinput.min.js', body: true},
            {src: '/global_assets/js/plugins/extensions/contextmenu.js', body: true},
            {src: '/global_assets/js/plugins/notifications/noty.min.js', body: true},
            {src: '/global_assets/js/plugins/notifications/sweet_alert.min.js', body: true},
            {src: '/assets/js/define.js', body: true},
            {src: '/assets/js/app.js', body: true},
            {src: '/assets/js/custom.js', body: true},
            {src: '/assets/js/function.js', body: true},
            {src: '/global_assets/js/demo_pages/dashboard.js', body: true},
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#fff'},
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/mixin',
        // '~/plugins/vue-switch',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
        }
    },
    env: {
        baseUrlAPI: 'https://core0817.herokuapp.com/api',
    }
}
