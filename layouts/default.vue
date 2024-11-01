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
  z-index: 10;
  position: fixed;
}
.main-container {
  margin-top: 66px;
  box-sizing: border-box;
  z-index: 1;
}
</style>
