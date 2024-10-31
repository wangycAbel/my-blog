<template>
  <div class="back">
    <div class="bubble">
      <span style="--i: 20"></span>
      <span style="--i: 65"></span>
      <span style="--i: 71"></span>
      <span style="--i: 87"></span>
      <span style="--i: 32"></span>
      <span style="--i: 91"></span>
      <span style="--i: 83"></span>
      <span style="--i: 35"></span>
      <span style="--i: 44"></span>
      <span style="--i: 95"></span>
      <span style="--i: 56"></span>
      <span style="--i: 37"></span>
      <span style="--i: 48"></span>
      <span style="--i: 69"></span>
      <span style="--i: 21"></span>
      <span style="--i: 62"></span>
      <span style="--i: 73"></span>
      <span style="--i: 84"></span>
      <span style="--i: 35"></span>
      <span style="--i: 61"></span>
      <span style="--i: 87"></span>
      <span style="--i: 38"></span>
      <span style="--i: 49"></span>
      <span style="--i: 19"></span>
      <span style="--i: 52"></span>
      <span style="--i: 33"></span>
      <span style="--i: 24"></span>
      <span style="--i: 65"></span>
      <span style="--i: 56"></span>
      <span style="--i: 27"></span>
      <span style="--i: 68"></span>
      <span style="--i: 79"></span>
      <span style="--i: 43"></span>
      <span style="--i: 32"></span>
      <span style="--i: 93"></span>
      <span style="--i: 84"></span>
      <span style="--i: 35"></span>
      <span style="--i: 46"></span>
      <span style="--i: 97"></span>
      <span style="--i: 58"></span>
      <span style="--i: 36"></span>
      <span style="--i: 25"></span>
      <span style="--i: 62"></span>
      <span style="--i: 20"></span>
      <span style="--i: 71"></span>
      <span style="--i: 32"></span>
      <span style="--i: 83"></span>
      <span style="--i: 44"></span>
      <span style="--i: 56"></span>
      <span style="--i: 48"></span>
      <span style="--i: 21"></span>
      <span style="--i: 73"></span>
      <span style="--i: 35"></span>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.back {
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  .bubble {
    position: relative;
    display: flex;
    justify-content: space-between;
    span {
      position: relative;
      width: 10px;
      height: 16px;
      background-color: var(--accent-color);
      animation: animate 15s linear infinite;
      animation-duration: calc(60s / var(--i));
    }
    span:nth-child(2n) {
      background-color: #419eff;
      width: 12px;
      height: 19px;
    }
    span:nth-child(3n) {
      background-color: #03c15f;
      width: 16px;
      height: 20px;
    }
  }
}
@keyframes animate {
  0% {
    transform: translateY(0) scale(0.3) rotate(0);
  }
  100% {
    transform: translateY(calc(100vh - 160px)) scale(1.2)
      rotate(calc(36000deg / var(--i)));
  }
}
</style>
