import { ref, onMounted, computed } from 'vue'

const mockApiAuthToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJmaXJzdE5hbWUiOiJCZW4iLCJsYXN0TmFtZSI6IkplaGwiLCJ1c2VybmFtZSI6ImJqZWhsMTIzIiwiZW1haWwiOiJiLmplaGxAZ21haWwuY29tIn0.5LLc9QTgO5Dq5ffgOqO3N75R7ZKmy1Zr_ftZZTQYoIY'

const user = ref({})
const isLoggedIn = ref(false)

export const userComp = () => {
  function decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]))
  }

  function getAuth() {
    const token = window.localStorage.getItem('jwt')
    if (token) {
      isLoggedIn.value = true
      user.value = decodeToken(token)
    } else {
      isLoggedIn.value = false
    }
  }

  function login() {
    const token = mockApiAuthToken
    window.localStorage.setItem('jwt', token)
    user.value = decodeToken(token)
    isLoggedIn.value = true
  }

  function logout() {
    window.localStorage.removeItem('jwt')
    isLoggedIn.value = false
    user.value = {}
  }

  onMounted(() => getAuth())

  return {
    login,
    logout,
    user: computed(() => user.value),
    isLoggedIn: computed(() => isLoggedIn.value),
  }
}
