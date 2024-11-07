<template>
  <div class="articel-contianer">
    <div
      v-for="article in data"
      @click="articleDetail(article._path)"
      :key="article._path"
      class="articel-box"
    >
      <div class="left">
        <div class="title">{{ article.name }}</div>
        <div class="desc">{{ article.description }}</div>
        <div class="date">{{ article.date }}</div>
      </div>
      <div class="right">
        <img :src="article.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/ts-comment */
// @ts-ignore
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
let router = useRouter();
const { data } = await useAsyncData("home", () => queryContent().find());
console.log(data)
const articleDetail = (fullPath: string) => {
  router.push(`${fullPath}`);
};
</script>
<style scope>
.articel-contianer {
  width: 100%;
  padding: 64px;
  overflow: hidden;
  box-sizing: border-box;
  .articel-box {
    width: 100%;
    border-bottom: 3px solid var(--accent-color);
    margin-bottom: 24px;
    cursor: pointer;
    height: 280px;
    overflow: hidden;
    display: flex;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .right {
      width: 210px;
      padding: 16px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      margin-bottom: 24px;
      margin-left: 24px;
      img {
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .title {
      font-size: 36px;
      text-decoration: underline;
      text-decoration-color: #a2dffb;
      color: var(--primary-color);
    }
    .desc {
      font-size: 22px;
      color: var(--text-color);
      flex:1;
      align-items: center;
      display: flex;
      padding:  24px 0;
      box-sizing: border-box;
    }
    .date {
      margin-bottom: 24px;
      color: var(--text-color);
    }
  }
}
</style>
