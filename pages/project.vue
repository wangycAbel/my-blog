<template>
  <div class="project-container">
    <div class="project-line" v-for="line in list">
      <div class="project-box" v-for="box in line" @click="openWeb(box.link)">
        <div class="name">{{ box.name }}</div>
        <div class="tech">{{ box.type }}</div>
        <div class="img">
          <img :src="box.icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import projectlist from "../source/project";
const list = projectlist;
const openWeb = (url: string) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.project-container {
  width: 100%;
  overflow: hidden;
  padding: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .project-line {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 24px;
    .project-box {
      flex: 1;
      margin: 0 12px;
      border-radius: 8px;
      padding: 16px;
      box-sizing: border-box;
      position: relative;
      background-color: #fff;
      cursor: pointer;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
      .name {
        font-size: 24px;
        margin-bottom: 8px;
      }
      .tech {
        font-size: 20px;
      }
      .img {
        position: absolute;
        width: 56px;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
