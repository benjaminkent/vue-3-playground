<template>
  <div class="beer-container">
    <h1 class="title" :title="name">{{ name }}</h1>
    <h6 class="subtitle">{{ tagline }}</h6>
    <div class="img-container">
      <img :src="image_url" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

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
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #eee;
  margin: 20px;
  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .img-container {
    display: flex;
    justify-content: center;
    img {
      height: 300px;
    }
    margin: 20px 0;
  }
}
</style>
