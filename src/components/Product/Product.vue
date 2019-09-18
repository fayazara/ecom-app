<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <Loading v-if="!product" msg="Getting product details" />
      <div v-else class="columns custom-columns">
        <div class="column is-one-third">
          <BreadCrumb msg="men" />
          <ProductDetails :data="product" />
          <ProductActions />
        </div>
        <div class="column">
          <Carousel :id="id" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { API } from "../../api";
import ProductDetails from "./ProductDetails";
import ProductActions from "./ProductActions";
import Carousel from "./Carousel";
import BreadCrumb from "./BreadCrumb";
import Loading from "../Loading";
export default {
  props: ["id"],
  data() {
    return {
      product: null
    };
  },
  components: {
    Loading,
    BreadCrumb,
    ProductDetails,
    ProductActions,
    Carousel
  },
  mounted() {
    API.get(`/products/${this.id}`).then(response => {
      this.product = response.data;
    });
  }
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}

@media (max-width: 767px) {
  .custom-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>