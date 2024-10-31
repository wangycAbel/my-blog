<template>
  <div class="footer-container">
    <div class="footer-title">
      <div>CONTACT ME</div>
      <img src="../assets/img/bi--telephone-fill.png" alt="" />
      <img src="../assets/img/clarity--email-solid.png" alt="" />
      <img src="../assets/img/simple-icons--wechat.png" alt="" />
    </div>
    <div class="qrCode">
      <span>
        <img src="../assets/img/wechatCode.png" alt="" />
        wechat
        <span> Abel_Wang_yu_chen </span>
      </span>
      <span>
        <img src="../assets/img/email.png" alt="" />
        Email
        <span> wangyuchenabel@gmail.com </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 64px 0;
  background: var(--white-color);
  .footer-title {
    padding: 96px 0;
    background-color: var(--secondary-color);
    border-radius: 0 0 100px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
    position: relative;
    div {
      z-index: 1;
    }
    img {
      position: absolute;
      width: 48px;
      z-index: 0;
    }
    img:first-of-type {
      left: 50%;
      top: 70%;
      transform: rotate(-20deg);
    }
    img:nth-of-type(2) {
      left: 28%;
      top: 35%;
      transform: rotate(-36deg);
    }
    img:nth-of-type(3) {
      right: 30%;
      top: 35%;
      transform: rotate(10deg);
    }
  }
  .qrCode {
    padding-top: 64px;
    display: flex;
    justify-content: space-around;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 192px;
    }
    img {
      width: 56px;
      height: 56px;
      margin-bottom: 8px;
    }
  }
}
</style>
