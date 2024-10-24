<template>
  <div>首页</div>
  <div v-if="articles" v-for="article in articles" :key="article._path">
    <NuxtLink :to="article._path">
      <h2>{{ article.title }}</h2>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
const { data: articles } = await useAsyncData(
  "content",
  () => queryContent().find() // 使用 `queryContent()` API 获取内容
);
console.log(articles.value);
</script>
