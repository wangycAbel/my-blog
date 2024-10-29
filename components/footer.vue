<template>
  <div class="footer-container">
    <span>@我来组成腿部</span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer-container {
  padding: var(--base-height) calc(var(--base-height) * 4);
  margin-top: calc(var(--base-height) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary-background-color);
  span {
    background: linear-gradient(90deg, #ff7a18 0%, #af002d 30%, #319197 70%);
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>
