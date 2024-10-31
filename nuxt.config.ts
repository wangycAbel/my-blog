import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content-edge", "@nuxt/icon"],
  imports: {
    autoImport: true, // 确保开启自动导入功能
  },

  css: [
    "animate.css",
    "@/assets/css/main.css", // 引入全局样式
    "@/assets/css/font.css",
  ],

  postcss: {
    plugins: {
      "postcss-pxtorem": {
        rootValue: 16, // 基准值，通常设置为 16px，即 1rem = 16px
        propList: ["*"], // 选择需要转换的属性，这里将所有 px 转换为 rem
        minPixelValue: 2, // 小于或等于此值的 px 不会被转换
        selectorBlackList: ["ignore"], // 可以通过 `ignore` 类名忽略转换
        mediaQuery: false, // 是否允许在媒体查询中转换 px
      },
      "postcss-normalize": {},
      "postcss-nested": {}, // 支持嵌套 CSS 规则
      autoprefixer: {}, // 自动添加浏览器前缀
    },
  },

  compatibilityDate: "2024-10-29",
});
