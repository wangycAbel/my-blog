<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <div v-html="article.body"></div>
    <!-- 检查使用正确的属性 -->
  </article>
  <div v-else>加载中...</div>
</template>
<script setup lang="ts">
const route = useRoute();

// 使用 queryContent 来获取当前文章
const { data: article } = await useAsyncData("article", () =>
  queryContent()
    .where({ _path: `/${route.params.slug}` })
    .findOne()
);
console.log(article.value.title);
console.log(article.value.body.value);
</script>
