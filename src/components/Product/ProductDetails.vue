<template>
  <div class="mb16">
      <div class="flex just-space-b align-center">
          <span class="is-size-3">{{data.name}}</span>
          <span>${{data.price}}</span>
      </div>
      
      <div class="flex just-space-b align-center">
          <span>{{data.description}}</span>
          <span>
              <box-icon v-for="(n, i) in 5" size="xs" :key="i" name='star' type='solid' color='#7dc242' ></box-icon> 
              <span> 159 reviews</span>
          </span>
      </div>

  </div>
</template>

<script>
export default {
    props: ["data"]
}
</script>
