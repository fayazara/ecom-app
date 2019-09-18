<template>
  <div>
    <transition name="fade" mode="out-in">
      <img :src="imageUrl" alt v-if="imageUrl" />
      <Loading v-else msg="Loading image"/>
    </transition>
  </div>
</template>

<script>
import Loading from "../Loading";
import { API } from "../../api";
export default {
  components: {
    Loading
  },
  props: ["id"],
  data() {
    return {
      imageUrl: ""
    };
  },
  mounted() {
    API.get(`images/${this.id}`).then(response => {
      this.imageUrl = response.data.url;
    });
  }
};
</script>

<style scoped>
div {
  height: 300px;
  text-align: center;
}

img {
  max-height: 98% !important;
}

@media (min-width: 1281px) {
  div {
    height: 535px !important;
  }

  img {
    max-height: auto !important;
  }
}

img {
  height: 100%;
}
</style>