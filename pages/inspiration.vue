<template>
  <div class="inspration">
    <div class="inpsration-title">Inspration</div>
    <div class="inpsration-wrapper">
      <div
        class="inspration-box"
        v-for="item in list"
        @click="openWeb(item.link)"
      >
        <div class="inspration-box-container">
          <div class="img-box">
            <img :src="item.url" alt="" />
          </div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import photoList from "../source/photo";
const list = photoList;
const openWeb = (url: string) => {
  window.open(url, "_blank");
};
</script>

<style scope>
.inspration {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-top: 124px;
  width: 100%;
  padding: 64px;
  .inpsration-title {
    z-index: -10;
    left: 0;
    top: -10%;
    color: #f55b50; /* 字体颜色 */
    font-size: 120px;
    font-weight: 900;
    letter-spacing: 8px;
  }
  .inpsration-wrapper {
    z-index: 10;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .inspration-box {
      overflow: hidden;
      flex: 0 0 33%;
      height: 300px;
      padding: 16px;
      box-sizing: border-box;
      .inspration-box-container {
        cursor: pointer;
        background-color: #fff;
        border-radius: 8px;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: 0.2s linear;
      }
      .inspration-box-container:hover {
        img {
          transform: scale(1.2);
        }
        .desc {
          transform: rotate(0);
          opacity: 1;
        }
      }
      .img-box {
        height: 100%;
        width: 100%;
        overflow: hidden;
        img {
          width: 100%;
          transition: 0.2s linear;
          height: 100%;
          object-fit: cover; /* 使图片填满容器并保持比例 */
        }
      }
      .desc {
        transition: 0.5s linear;
        position: absolute;
        overflow: hidden;
        font-size: 24px;
        color: #fff;
        flex: 1;
        padding: 8px;
        background-color: #f55b5099;
        opacity: 0;
        width: 100%;
        height: 100%;
        word-break: break-all;
        box-sizing: border-box;
        transform-origin: right bottom;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
