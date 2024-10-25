<template>
  <div>article</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.path)
</script>

<style scoped></style>
