import colors from "vuetify/es5/util/colors";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - Fractional Design",
    title: "Fractional Design",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["plugins/utilities", "plugins/wysiwyg"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/firebase",
    "@nuxtjs/cloudinary",
  ],
  firebase: {
    config: {
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      apiKey: "AIzaSyAFAXCl1A6Z2NMF_8xf36qjTdHwohYAch8",
      authDomain: "fractionaldesign.firebaseapp.com",
      projectId: "fractionaldesign",
      storageBucket: "fractionaldesign.appspot.com",
      messagingSenderId: "56305429715",
      appId: "1:56305429715:web:18ea974e027f4f57f73826",
      measurementId: "G-N29LWDC07Q",
    },
    services: {
      auth: {
        ssr: false,
        persistence: "session",
        // initialize: {
        //   onAuthStateChanged: 'onAuthStateChanged',
        //   subscribeManually: false,
        // },
      },
      database: true,
      functions: {
        location: "us-central1",
      },
    },
  },
  cloudinary: {
    cloudName: "fractional-design",
    apiKey: "323656766947411",
    apiSecret: "eBBToBn1B0B8t-1fs3zjnpSVhwk",
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
