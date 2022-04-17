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
};
