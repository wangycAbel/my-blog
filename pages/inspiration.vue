<template>
  <div class="inspration">
    <div class="inpsration-title">Inspration</div>
    <div class="inpsration-container" ref="photos">
      <div class="inspration-line">
        <div class="inspration-box">
          <img src="../assets/album/1.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/2.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/3.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/4.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/5.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/6.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/7.jpg" alt="" />
        </div>
      </div>
      <div class="inspration-line">
        <div class="inspration-box">
          <img src="../assets/album/8.png" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/9.png" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/10.png" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/11.png" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/12.png" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/1.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/2.jpg" alt="" />
        </div>
      </div>
      <div class="inspration-line">
        <div class="inspration-box">
          <img src="../assets/album/3.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/4.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/5.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/6.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/7.jpg" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/8.png" alt="" />
        </div>
        <div class="inspration-box">
          <img src="../assets/album/9.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

let photos = ref<HTMLElement>();
let photos_height: number = 0;
let photos_width: number = 0;
let elemens_height: number = 0;
let elemens_width: number = 0;
let if_movable: boolean = false;
let mouse_x: number = 0;
let mouse_y: number = 0;
const img_data: any[] = [];
const init = () => {
  resize();
  window.addEventListener("resize", () => {
    resize();
  });
  const rect = photos.value?.getBoundingClientRect();
  photos.value?.addEventListener("mousedown", (e: MouseEvent) => {
    if_movable = true;
    mouse_x = e.clientX;
    mouse_y = e.clientY - rect!.top;
  });
  photos.value?.addEventListener("mouseup", (e: MouseEvent) => {
    if_movable = false;
  });
  photos.value?.addEventListener("mouseleave", (e: MouseEvent) => {
    if_movable = false;
  });
  photos.value?.addEventListener("mousemove", (e: MouseEvent) => {
    move(e.clientX, e.clientY - rect!.top);
  });
};
const move = (x: number, y: number) => {
  if (!if_movable) return 0;
  let distance_x = x - mouse_x;
  let distance_y = y - mouse_y;
  console.log(photos_height);
  img_data.forEach((img) => {
    img.mov_x += distance_x;
    if (img.x + img.mov_x > photos_width) {
      img.mov_x -= photos_width;
    }
    if (img.x + img.mov_x < -elemens_width) {
      img.mov_x += photos_width;
    }
    img.mov_y += distance_y;
    if (img.y + img.mov_y > photos_height) {
      img.mov_y -= photos_height;
    }
    if (img.y + img.mov_y < -elemens_height) {
      img.mov_y += photos_height;
    }
    img.node.style.transform = `translate(${img.mov_x}px,${img.mov_y}px)`;
  });
  mouse_x = x;
  mouse_y = y;
};
const resize = async () => {
  await nextTick();
  let elements = ref<HTMLElement[]>([]);
  const domElements = document.getElementsByClassName("inspration-box");
  elements.value = Array.from(domElements) as HTMLElement[];
  photos_height = photos.value!.offsetHeight;
  photos_width = photos.value!.offsetWidth;
  elemens_height = elements.value[0].offsetHeight;
  elemens_width = elements.value[0].offsetWidth;
  elements.value!.forEach((img) => {
    img_data.push({
      node: img,
      x: img.offsetLeft,
      y: img.offsetTop,
      mov_x: 0,
      mov_y: 0,
    });
  });
};
</script>

<style scope>
.inspration {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-top: 124px;
  height: 100vh;
  .inpsration-title {
    z-index: 10;
    position: absolute;
    left: 0;
    top: 0%;
    color: #f55b50; /* 字体颜色 */
    font-size: 200px;
    text-align: center;
    font-weight: 900;
    z-index: 0;
    letter-spacing: 8px;
  }
  .inpsration-container {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    .inspration-line {
      height: 240px;
      margin-bottom: 24px;
      flex-shrink: 0;
      display: flex;
      .inspration-box {
        width: 180px;
        height: 100%;
        border-radius: 15px;
        background-color: #f55b50;
        overflow: hidden;
        flex-shrink: 0;
        margin-right: 24px;
        position: relative;
        img {
          position: absolute;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:hover img {
          transform: translateX(-50%) scale(1.5);
        }
      }
    }
  }
}
</style>
