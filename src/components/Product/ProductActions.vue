<template>
  <div class="actionBox">
    <div class="mytabs flex">
      <div class="has-text-centered is-uppercase" @click="selectedTab = 'male'">Men</div>
      <div class="has-text-centered is-uppercase" @click="selectedTab = 'female'">Women</div>
    </div>
    <div class="tabcontent">
      <div v-if="selectedTab == 'male'" class="p8">
        <p class="is-size-7 is-italic is-uppercase">Select Color</p>
        <div class="flex align-center flex-wrap mb16 colorChart">
          <span
            v-for="(color, index) in colors"
            :key="index"
            class="swatch"
            :class="{active:color == selectedColor}"
            :style="`background-color: #${color}`"
            @click="selectedColor = color"
          ></span>
        </div>
        <div class="sizechart">
          <div class="flex align-center just-space-b mb16">
            <span class="is-uppercase is-italic is-size-7">Select size</span>
            <a class="is-italic is-size-7">Size &amp; Fit Guide</a>
          </div>
          <div class="flex flex-wrap">
            <span
              class="size flex align-center just-center"
              v-for="(n,i) in sizes"
              :key="i"
              :class="[!n.available? 'bgGrey': '', n.size==selectedSize ? 'active' : '' ]"
              @click="selectedSize = n.size"
            >{{n.size}}</span>
          </div>
        </div>
      </div>
      <div v-if="selectedTab == 'female'">Female</div>
    </div>
    <div>
      <button class="button">ADD TO BAG</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: "",
      selectedSize: "",
      selectedTab: "male",
      //   Adding some colors & sizes as the api was not returning any
      colors: [
        "F7F7F7",
        "072348",
        "000000",
        "B5222E",
        "FFCF60",
        "F0CF64",
        "129F7D",
        "C69F97",
        "215297",
        "B3926E"
      ],
      sizes: [
        {
          size: 5,
          available: true
        },
        {
          size: 5.5,
          available: true
        },
        {
          size: 6,
          available: false
        },
        {
          size: 6.5,
          available: true
        },
        {
          size: 7,
          available: true
        },
        {
          size: 7.5,
          available: false
        },
        {
          size: 8,
          available: true
        },
        {
          size: 8.5,
          available: false
        },
        {
          size: 9,
          available: false
        },
        {
          size: 9.5,
          available: false
        },
        {
          size: 10,
          available: true
        },
        {
          size: 10.5,
          available: true
        },
        {
          size: 11,
          available: false
        },
        {
          size: 11.5,
          available: true
        },
        {
          size: 12,
          available: true
        },
        {
          size: 12.5,
          available: false
        },
        {
          size: 13,
          available: true
        }
      ]
    };
  },
  methods: {
    checkSize(n) {
      return n == this.selectedSize ? true : false;
    }
  }
};
</script>

<style scoped>
.actionBox {
  border: 1px solid #c8c8c8;
}

.mytabs div {
  flex: 1;
  padding: 8px;
  cursor: pointer;
}

.swatch {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #c8c8c8;
  cursor: pointer;
  margin: 3px;
}

.active {
  border: 4px solid #7dc242 !important;
}

.size {
  height: 34px;
  width: 34px;
  margin: 4px;
  padding: 8px;
  border: 1px solid #cccccc;
  cursor: pointer;
}

.bgGrey {
  background-color: #eaeaea;
}

.button {
  height: 60px;
  width: 100%;
  background-color: #7dc242;
  color: #fff;
  border-radius: 0;
  border: 4px solid #7dc242;
}
</style>