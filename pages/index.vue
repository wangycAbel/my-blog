<template>
  <div class="index-container">
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
      <div class="information"></div>
    </div>
    <div class="section skill-tree">Skill-tree</div>
    <div class="section time-pie">Time-pie</div>
    <div class="section artiacl-list">Artiacl-list</div>
    <div class="section inspration">Inspration</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
</script>

<style scoped>
.index-container {
  width: 100%;
  overflow: hidden;
  .section {
    box-sizing: border-box;
  }
  .banner {
    display: flex;
    align-items: center;
    position: relative;
    height: calc(100vh - 65px);
    box-sizing: border-box;
    padding: 64px;
    .text-box {
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
  }
}
</style>
