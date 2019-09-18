<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <span>
          <img class="logo" src="../../assets/logo.svg" width="112" height="28" />
        </span>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="isActive = !isActive"
          :class="{'is-active' : isActive}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{'is-active' : isActive}">
        <div class="navbar-start">
          <span class="navbar-item is-uppercase">MEN</span>
          <span class="navbar-item is-uppercase">WOMEN</span>
        </div>
        <div class="navbar-end" :class="{'is-active' : isActive}">
          <span class="navbar-item">ABOUT</span>
          <span class="navbar-item"><box-icon name='user'></box-icon></span>
          <span class="navbar-item"><box-icon name='shopping-bag' ></box-icon></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import boxicons from 'boxicons'
export default {
  name: "Header",
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
@media (min-width: 1281px) {
  .navbar-brand {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.logo {
  height: 75px;
  width: 45px;
}
</style>