<template>
  <div class="header-container">
    <header>
      <div class="name-container">
        <p v-if="isLoggedIn" class="name">Hey {{ user.username }}!</p>
      </div>
      <div class="auth-actions">
        <button v-if="isLoggedIn" @click="logout">Log Out</button>
        <button v-else @click="login">Log In</button>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userComp } from '@/composables/user'

export default defineComponent({
  name: 'MainHeader',
  setup() {
    return {
      ...userComp(),
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  background-color: #272727;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name-container {
    color: #fff;
    p {
      margin: 0;
    }
  }
  .auth-actions {
    button {
      cursor: pointer;
      padding: 5px 16px;
      border-radius: 5px;
      border: transparent;
      background-color: #fff;
    }
    button:hover {
      background-color: #ddd;
    }
  }
}
</style>
