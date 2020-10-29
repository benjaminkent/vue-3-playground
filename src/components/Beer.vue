<template>
  <div class="beer-container">
    <h1>{{ name }}</h1>
    <h6 class="subtitle">{{ tagline }}</h6>
    <img :src="image_url" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Beer',
  props: {
    name: {
      type: String,
      default: '',
    },
    abv: {
      type: Number,
      default: 0,
    },
    brewers_tips: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    food_pairing: {
      type: Array,
      default: () => [],
    },
    ibu: {
      type: Number,
      default: 0,
    },
    image_url: {
      type: String,
      default: '',
    },
    tagline: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.beer-container {
  padding: 20px;
  img {
    height: 300px;
  }
}
</style>
