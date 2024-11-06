<template>
  <div class="post-container">
    <ContentDoc v-slot="{ doc }">
      <div class="title">
        {{ doc.name }}
      </div>
      <div class="date">
        {{ doc.date }}
      </div>
      <div class="main">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.post-container {
  width: 100%;
  padding: 64px;
  overflow: hidden;
  box-sizing: border-box;
  .title {
    font: bold 200% Consolas, Monaco, monospace;
    font-size: 96px;
    color: var(--accent-color);
    margin-bottom: 16px;
  }
  .date {
    font-size: 22px;
    color: #aaa;
    margin-bottom: 32px;
  }
  .main {
    width: 100%;
    background-color: #fff;
    padding: 64px;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.8em;
  }
}
</style>
