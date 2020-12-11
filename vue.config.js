const path = require("path");
module.exports = {
  configureWebpack: {
    // resolve.alias는 모듈을 더 쉽게 import, require 하게 만듭니다.
    resolve: {
      alias: {
        scss: path.resolve("./src/assets/scss"),
        // '@'는 현재 프로젝트의 client/src/까지의 최종 경로를 의미합니다.
        "@": path.join(__dirname, "src/")
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "편집맛집";
      return args;
    });
  }
};
