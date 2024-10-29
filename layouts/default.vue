<template>
  <div class="header-box">
    <Header></Header>
  </div>
  <div class="main-container">
    <slot />
  </div>
  <Footer></Footer>
</template>
<style scoped>
.header-box {
  width: 100vw;
  position: fixed;
}
.main-container {
  margin-top: 66px;
  box-sizing: border-box;
  padding: 0 calc(var(--base-height) * 8);
}
</style>