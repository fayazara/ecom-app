<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <Loading v-if="!products" msg="Getting your products"/>
      <ul v-else>
        <li v-for="(product, index) in products" :key="index">
          <router-link :to="`/product/${product.id}`">
            <div class="flex just-space-b align-center">
              <span class="is-size-2 has-text-weight-bold has-text-grey">{{product.name}}</span>
              <span class="is-size-5">${{product.price}}</span>
            </div>
            <p class="is-size-5">{{product.description}}</p>
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'
import { API } from "../api";
export default {
  data() {
    return {
      products: null
    };
  },
  mounted() {
    API.get("products").then(response => {
      this.products = response.data;
    });
  },
  components: {
      Loading
  }
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}

li {
  padding: 2rem;
  box-shadow: 0 0 11px #aaaaaa52;
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>