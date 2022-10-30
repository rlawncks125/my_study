module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      // scss 글로벌 정의
      sass: {
        additionalData: `
        @use "~@/assets/scss/import/media.scss" as *;
        @use "~@/assets/scss/import/codeCovert.scss" as *;
        `,
      },
    },
  },
  pwa: {
    themeColor: "#4DBA87",
    backgroundColor: "#4DBA87",
    display: "standalone",
    scope: "/",
    startUrl: "/",
    name: "대충 정리한 사이트2345",
    shortName: "김주찬 Site",

    iconPaths: {
      faviconSVG: "favicon.ico",
      favicon32: "icons/logo_x32.png",
      favicon16: "icons/logo_x16.png",
      appleTouchIcon: "icons/logo_x152.png",
      msTileImage: "icons/logo_x128.png",
    },
    // configure the workbox plugin
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: "src/service-worker.js",
    //   // ...other Workbox options...
    // },
  },
};
