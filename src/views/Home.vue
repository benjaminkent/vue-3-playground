<template>
  <div class="home">
    <beer v-for="beer in beers" :key="beer.id" v-bind="beer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { beersComp } from '@/composables/beers'
import Beer from '@/components/Beer.vue'

export default defineComponent({
  name: 'Home',
  components: { Beer },
  setup() {
    return {
      ...beersComp(),
    }
  },
})
</script>
