<template>
  <div class="header-container">
    <ul class="menu">
      <li
        class="menu-item"
        :class="nowRoute === '/' ? 'light' : ''"
        @click="pageJump('')"
      >
        <div class="menu-text animate__animated">
          <Icon name="maki:baseball" size="24" color="#f55b50" />
          Abel
        </div>
      </li>
      <li
        class="menu-item"
        :class="nowRoute === '/artical' ? 'light' : ''"
        @click="pageJump('artical')"
      >
        <div class="menu-text animate__animated">杂记·Article</div>
      </li>
      <li
        class="menu-item"
        :class="nowRoute === '/project' ? 'light' : ''"
        @click="pageJump('project')"
      >
        <div class="menu-text animate__animated">工程·Project</div>
      </li>
      <li
        class="menu-item"
        :class="nowRoute === '/inspiration' ? 'light' : ''"
        @click="pageJump('inspiration')"
      >
        <div class="menu-text animate__animated">灵感·Inspiration</div>
      </li>
    </ul>
    <div class="media" @click="toGithub">
      <Icon name="icon-park-outline:github" size="32" color="#f55b50" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
let nowRoute = ref<string>(route.fullPath);

let router = useRouter();
const pageJump = (name: string): void => {
  nowRoute.value = `/${name}`;
  router.push(`/${name}`);
};
const toGithub = () => {
  window.open("https://github.com/wangycAbel");
};
onMounted(() => {
  nowRoute.value = `${route.fullPath}`;
});
</script>
<style scoped>
.header-container {
  display: flex;
  padding: 0 calc(var(--base-height) * 4);
  flex-wrap: wrap;
  background-color: var(--text-color);
  margin-bottom: calc(var(--base-height) * 2);
  align-items: center;
  .logo {
    font-weight: 700;
    color: var(--accent-color);
    font-size: 24px;
    margin-right: 16px;
  }
  .menu {
    display: flex;
    flex: 1;
    .menu-item {
      color: var(--secondary-background-color);
      padding: 8px 32px;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: var(--accent-color);
        background-color: var(--primary-color);
        .menu-text {
          animation: swing 0.5s;
        }
      }
    }
    .light {
      color: var(--accent-color);
    }
  }
  .media {
    color: var(--accent-color);
    padding-top: 5.5px;
    cursor: pointer;
  }
}
</style>
