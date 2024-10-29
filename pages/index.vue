<template>
  <div class="index-container">
    <div class="section banner">Banner</div>
    <div class="section skill-tree">Skill-tree</div>
    <div class="section time-pie">Time-pie</div>
    <div class="section artiacl-list">Artiacl-list</div>
    <div class="section inspration">Inspration</div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.index-container {
  width: 100%;
  overflow: hidden;
  .section {
    box-sizing: border-box;
    padding: 0 calc(var(--base-height) * 8) calc(var(--base-height) * 8);
    text-align: center;
    font-size: calc(var(--base-height) * 8);
  }
}
</style>
