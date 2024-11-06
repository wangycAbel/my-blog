<template>
  <div class="project-container">
    <div class="project-line">
      <div class="project-box">
        <div class="name">my-blog</div>
        <div class="tech">Nuxt3</div>
        <div class="img">
          <img src="../assets/img/skill-icons--nuxtjs-dark.png" alt="" />
        </div>
      </div>
      <div class="project-box">
        <div class="name">my-blog</div>
        <div class="tech">Nuxt3</div>
        <div class="img">
          <img src="../assets/img/skill-icons--nuxtjs-dark.png" alt="" />
        </div>
      </div>
      <div class="project-box">
        <div class="name">my-blog</div>
        <div class="tech">Nuxt3</div>
        <div class="img">
          <img src="../assets/img/skill-icons--nuxtjs-dark.png" alt="" />
        </div>
      </div>
    </div>
    <div class="project-line">
      <div class="project-box">
        <div class="name">my-blog</div>
        <div class="tech">Nuxt3</div>
        <div class="img">
          <img src="../assets/img/skill-icons--nuxtjs-dark.png" alt="" />
        </div>
      </div>
      <div class="project-box">
        <div class="name">my-blog</div>
        <div class="tech">Nuxt3</div>
        <div class="img">
          <img src="../assets/img/skill-icons--nuxtjs-dark.png" alt="" />
        </div>
      </div>
    </div>
    <div class="project-line">
      <div class="project-box">
        <div class="name">my-blog</div>
        <div class="tech">Nuxt3</div>
        <div class="img">
          <img src="../assets/img/skill-icons--nuxtjs-dark.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
