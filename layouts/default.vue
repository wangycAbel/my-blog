<template>
  <div class="header-box">
    <Header></Header>
  </div>
  <div class="main-contianer">
    <slot />
  </div>
  <Footer></Footer>
</template>
<style scoped>
.header-box{
  width: 100vw;
  position: fixed;
}
.main-contianer{
  margin-top: 66px;
}

</style>
