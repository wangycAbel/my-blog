<template>
  <div class="index-container" ref="lenisContainer">
    <div class="section banner">
      <Back></Back>
      <div class="text-box">
        <div class="back-text">思ぃ出なんかいらん</div>
        <div class="post-box">
          <div class="line1">BE BATTER!</div>
          <div class="line2">BE COOLER!</div>
          <div class="line3"><span>LOOK</span> <span>FORWARD!</span></div>
        </div>
      </div>
      <div class="information">
        <div class="information-btn">Who Am I?</div>
        <p>
          <span data-text="Name">Name:</span>
          <span data-text="王雨辰">王雨辰</span>
          <span data-text="·Abel">·Abel</span>
          <span data-text="前端漫游者·Front End Roamer"
            >前端漫游者·Front End Roamer</span
          >
          <span data-text="野生棒球中年·Baseball">野生棒球中年·Baseball</span>
          <span data-text="老二刺猿·Otaku">老二刺猿·Otaku</span>
          <span data-text="福建 厦门·Xiamen">福建 厦门·Xiamen </span>
        </p>
      </div>
    </div>
    <div class="section skill-tree">
      <div class="svg-box">
        <svg viewBox="0 0 600 300">
          <text x="300" y="150" text-anchor="middle" dominant-baseline="middle">
            SKILL TREE
          </text>
        </svg>
      </div>
      <div class="skill-container">
        <div class="skill-left">
          <div class="js skill-box">
            <span>JS & TS</span>
            <div class="progress js"></div>
          </div>
          <div class="vue skill-box">
            <span>VUE & NUXT</span>
            <div class="progress vue"></div>
          </div>
          <div class="nest skill-box">
            <span>NODEJS & NEXT</span>
            <div class="progress node"></div>
          </div>
        </div>
        <div class="photo skill-box" ref="slideBox">
          <div class="slide slide1" ref="slide1"></div>
          <div class="slide slide2" ref="slide2"></div>
        </div>

        <div class="skill-right">
          <div class="CSS skill-box">
            <span>CSS</span>
            <div class="progress css"></div>
          </div>
          <div class="webpack skill-box">
            <span>VITE & WEBPACK</span>
            <div class="progress vite"></div>
          </div>
          <div class="microapp skill-box">
            <span>MICRO APP</span>
            <div class="progress micro"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section article">
      <div class="article-title">Recent Article</div>
      <div class="article-list">
        <ContentList v-slot="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="article-box"
            @click="articleDetail(article._path)"
          >
            <span class="date">{{ article.date }}</span>
            <div class="title">{{ article.name }}</div>
            <div class="sort">{{ article._dir }}</div>
          </div>
        </ContentList>
      </div>
    </div>
    <div class="section inspration">
      <div class="inpsration-title">Inspration</div>
      <div class="inspration-contianer waterfall1">
        <div
          class="inspration-box"
          v-for="item in list"
          @click="openWeb(item.link)"
        >
          <img :src="item.url" alt="" />
        </div>
      </div>
      <div class="inspration-contianer waterfall2">
        <div
          class="inspration-box"
          v-for="item in list"
          @click="openWeb(item.link)"
        >
          <img :src="item.url" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import photoList from "@/assets/album/photo";
const list = photoList;
const openWeb = (url: string) => {
  window.open(url, "_blank");
};
let router = useRouter();
const slide1 = ref<HTMLElement>();
const slide2 = ref<HTMLElement>();
const slideBox = ref<HTMLElement>();
const slide = (e: MouseEvent): void => {
  const rect = slideBox.value?.getBoundingClientRect();
  const windowX = e.clientX;
  let x = windowX - rect!.left;
  const sliedWidth = slideBox.value?.clientWidth;
  slide2.value!.style.left = -sliedWidth! + x + "px";
};

onMounted(async () => {
  await nextTick();
  slideBox.value?.addEventListener("mousemove", slide);
});
onBeforeUnmount(() => {
  slideBox.value?.removeEventListener("mousemove", slide);
});

const articleDetail = (fullPath: string) => {
  router.push(`${fullPath}`);
};
</script>

<style scoped>
.index-container {
  width: 100%;
  overflow: hidden;
  .section {
    box-sizing: border-box;
    padding: 64px;
  }
  .banner {
    display: flex;
    align-items: center;
    position: relative;
    height: calc(100vh - 65px);
    box-sizing: border-box;
    .text-box {
      flex: 1;
      .back-text {
        font-size: 136px;
        width: 100%;
        text-align: center;
        font-family: "daci";
        position: absolute;
        color: var(--accent-color);
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-12deg);
        opacity: 0.3;
        z-index: -1;
      }
      .post-box {
        font-family: "Chewy-Regular";
        font-size: 112px;
        font-weight: 900;
        z-index: 10;
        flex: 65%;
        letter-spacing: 8px;
        .line1 {
          color: var(--accent-color);
        }
        .line2 {
          color: var(--primary-color);
        }
        .line3 {
          span:first-child {
            -webkit-text-stroke: 1px #f55b50;
            color: #00000000; /* 字体颜色 */
          }
          span:last-child {
            color: var(--accent-color);
          }
        }
      }
    }
    .information {
      flex: 0 0 35%;
      height: 100%;
      position: relative;
      .information-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "itim-Regular";
        border: 1px solid var(--accent-color);
        color: var(--accent-color);
        font-size: 32px;
        width: 240px;
        height: 64px;
        line-height: 64px;
        border-radius: 15px;
        cursor: pointer;
        text-align: center;
      }
      .information-btn::before {
        content: "Who Am I?";
        color: #00000000;
        position: absolute;
        right: 0;
        border-radius: 15px;
        bottom: 0;
        width: 240px;
        height: 0;
        background: var(--accent-color);
        transition: all 0.7s;
        z-index: 0;
      }

      .information-btn:hover::before {
        bottom: 0;
        height: 64px;
        color: var(--secondary-color);
      }

      .information-btn:hover ~ p span {
        opacity: 1;
        color: var(--text-color);
        transform: translateY(0) translateZ(0);
        transition-property: transform, opacity;
        transition-duration: 1s, 0.2s;
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1), linear;
      }
      .information-btn:hover ~ p span:after {
        opacity: 0;
        transition-property: opacity;
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      }

      p {
        position: absolute;
        font-size: 20px;
        width: 280px;
        overflow: hidden;
        left: 50%;
        top: calc(50% - 144px);
        transform: translate(-50%, -50%);
        z-index: 0;
        span {
          position: relative;
          display: inline-block;
          color: var(--primary-color);
          opacity: 0;
          transform: translateY(15px) translateZ(0);
          transition-property: transform, opacity;
          transition-duration: 0.3s, 0.2s;
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1), linear;
        }
        span:after,
        span:before {
          position: absolute;
          content: attr(data-text);
          top: 0;
          left: 0;
          z-index: 1;
          transform: translateZ(0);
          will-change: opacity;
        }
        span:after {
          color: var(--accent-color);
          transition-property: opacity;
          transition-duration: 0.1s;
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }
        span:nth-child(1) {
          transition-delay: 0.7s;
        }
        span:nth-child(2) {
          transition-delay: 0.6s;
        }
        span:nth-child(3) {
          transition-delay: 0.5s;
        }
        span:nth-child(4) {
          transition-delay: 0.4s;
        }
        span:nth-child(5) {
          transition-delay: 0.3s;
        }
        span:nth-child(6) {
          transition-delay: 0.2s;
        }
        span:nth-child(7) {
          transition-delay: 0.1s;
        }
      }
    }
  }
  .skill-tree {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .svg-box {
      width: 100%;
      height: 128px;
      svg {
        width: 100%;
        height: 128px;
        margin: auto;
      }
      svg text {
        text-transform: uppercase;
        animation: stroke 2s infinite alternate;
        letter-spacing: 10px;
        font-size: 128px;
        font-family: "Chewy-Regular";
        line-height: 1em;
      }
      @keyframes stroke {
        0% {
          fill: rgba(245, 91, 80, 0);
          stroke: rgba(245, 91, 80, 1);
          stroke-dashoffset: 25%;
          stroke-dasharray: 0 50%;
          stroke-width: 0.5;
        }
        50% {
          fill: rgba(245, 91, 80, 0);
          stroke: rgba(245, 91, 80, 1);
          stroke-width: 0.5;
        }
        70% {
          fill: rgba(245, 91, 80, 0);
          stroke: rgba(245, 91, 80, 1);
          stroke-width: 1;
        }
        90%,
        100% {
          fill: rgba(245, 91, 80, 1);
          stroke: rgba(245, 91, 80, 0);
          stroke-dashoffset: -25%;
          stroke-dasharray: 50% 0;
          stroke-width: 0;
        }
      }
    }
    .skill-container {
      flex: 1;
      display: flex;
      .skill-box {
        cursor: pointer;
        background-color: var(--white-color);
        margin: 8px;
        border-radius: 8px;
        font-family: "itim-Regular";
        padding: 16px;
        font-size: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        span {
          display: block;
          margin-bottom: 32px;
        }
        .progress {
          display: block;
          height: 8px;
          width: 60%;
          background-color: #f55b5040;
          border-radius: 8px;
        }
        .progress::after {
          content: "";
          display: block;
          height: 8px;
          width: 0%;
          background-color: #f55b50;
          border-radius: 6px;
        }
        .js::after {
          animation: js 0.2s forwards infinite;
        }
        .vue::after {
          animation: vue 0.2s forwards infinite;
        }
        .node::after {
          animation: node 0.2s forwards infinite;
        }
        .css::after {
          animation: css 0.2s forwards infinite;
        }
        .vite::after {
          animation: vite 0.2s forwards infinite;
        }
        .micro::after {
          animation: micro 0.2s forwards infinite;
        }
        @keyframes js {
          from {
            width: 94%;
          }
          to {
            width: 95%;
          }
        }

        @keyframes vue {
          from {
            width: 84%;
          }
          to {
            width: 85%;
          }
        }

        @keyframes node {
          from {
            width: 69%;
          }
          to {
            width: 70%;
          }
        }

        @keyframes css {
          from {
            width: 79%;
          }
          to {
            width: 80%;
          }
        }

        @keyframes vite {
          from {
            width: 49%;
          }
          to {
            width: 50%;
          }
        }
        @keyframes micro {
          from {
            width: 45%;
          }
          to {
            width: 46%;
          }
        }
      }

      .skill-left {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 25%;
        .skill-box {
          flex: 1;
        }
      }
      .skill-right {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 25%;
        .skill-box {
          flex: 1;
        }
      }
      .photo {
        width: 50%;
        height: calc(100% - 16px);
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }
        .slide1 {
          background: url(../assets/img/WechatIMG29.jpg) no-repeat
            rgba(255, 0, 0, 0.1);
          left: 0%;
          background-size: 55%;
          background-position: center;
          background-attachment: fixed;
        }

        .slide2 {
          background: url(../assets/img/WechatIMG30.jpg) no-repeat
            rgba(81, 110, 255, 0.1);
          left: 100%;
          background-size: 55%;
          background-position: center;
          background-attachment: fixed;
        }
      }
    }
  }
  .article {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    .article-title {
      font: bold 200% Consolas, Monaco, monospace;
      border-right: 0.1em solid;
      width: 100%;
      font-size: 96px;
      color: var(--accent-color);
      width: 14ch;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 10s steps(14, end) infinite,
        cursor-blink 0.3s step-end infinite alternate;
      @keyframes typing {
        0% {
          width: 0;
        }
        40% {
          width: 14ch;
        }
        80% {
          width: 14ch;
        }
        100% {
          width: 0;
        }
      }
      @keyframes cursor-blink {
        50% {
          border-color: transparent;
        }
      }
    }
    .article-list {
      display: flex;
      position: relative;
      overflow-x: scroll;
      width: 100%;
      scrollbar-color: #f55b50 #f5f5f5;
      padding-top: 32px;
      .article-box {
        padding: 16px;
        border-radius: 16px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        transition: 0.2s;
        margin: 0;
        height: 240px;
        margin-bottom: 16px;
        margin-right: 16px;
        border: 8px dashed var(--primary-color);
        cursor: pointer;
        .date {
          font-size: 16px;
          color: var(--text-color);
        }
        .title {
          font-size: 32px;
          font-weight: 700;
          color: var(--primary-color);
          font-family: "itim-Regular" sans-serif;
          width: 180px;
          line-height: 32px;
          max-height: 64px;
          overflow: hidden;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 2; /* 可根据需要修改行数 */
        }
        .sort {
          font-size: 16px;
          color: var(--text-color);
        }
      }
      .article-box:hover {
        transform: translate(0, -32px) rotate(0deg);
        border: 8px dashed #f55b50;
        .title {
          color: #f55b50;
        }
      }
    }
  }
  .inspration {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    height: 100vh;
    .inpsration-title {
      z-index: 10;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: #f55b50; /* 字体颜色 */
      font-size: 240px;
      text-align: center;
      font-weight: 900;
      z-index: 0;
      letter-spacing: 8px;
    }
    .waterfall1 {
      top: 32px;
      animation: scroll1 15s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    }
    .waterfall2 {
      bottom: 32px;
      animation: scroll2 15s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    }
    .inspration-contianer {
      position: absolute;
      height: 30%;
      left: 0;
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      .inspration-box {
        margin-right: 16px;
        display: block;
        height: 100%;
        cursor: pointer;
        overflow: hidden;
        transition: transform 5s ease;
        img {
          display: block;
          height: 100%;
        }
        &:hover img {
          transform: scale(1.2);
        }
      }
      @keyframes scroll1 {
        0% {
          transform: translateX(50%);
        }
        50% {
          transform: translateX(-50%); /* 向左滚动一半 */
        }
        100% {
          transform: translateX(50%);
        }
      }
      @keyframes scroll2 {
        0% {
          transform: translateX(-50%);
        }
        50% {
          transform: translateX(50%); /* 向左滚动一半 */
        }
        100% {
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
