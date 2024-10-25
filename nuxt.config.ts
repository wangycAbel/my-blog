import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content-edge"],
  imports: {
    autoImport: true, // 确保开启自动导入功能
  },
  css: [
    "@/assets/css/main.css", // 引入全局样式
  ],
  postcss: {
    plugins: {
      'postcss-normalize': {},
      "postcss-nested": {}, // 支持嵌套 CSS 规则
      autoprefixer: {}, // 自动添加浏览器前缀
    },
  },
});
