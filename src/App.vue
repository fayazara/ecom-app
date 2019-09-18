<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Layout/Header";
export default {
  components: {
    Header
  }
};
</script>
<style>
#app {
  font-family: "Product Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@media (min-width: 320px) and (max-width: 480px) {
  .container {
    max-width: 90%;
  }
}

.flex {
  display: flex;
}

.just-space-b {
  justify-content: space-between;
}
.just-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.mb16 {
  margin-bottom: 16px;
}
.p8{
  padding: 8px;
}
.flex-wrap {
  flex-wrap: wrap;
}

</style>
