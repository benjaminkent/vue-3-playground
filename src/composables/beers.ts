import { computed, onMounted, ref } from 'vue'
import apiClient from '@/ajax/apiClient'

export const beersComp = () => {
  const beersState = ref([])

  const beers = computed(() => beersState.value)

  async function getRandomBeer() {
    const response = await apiClient.getRandomBeer()

    beersState.value = response
  }

  onMounted(() => {
    getRandomBeer()
  })

  return {
    beers,
  }
}
