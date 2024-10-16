<template>
  <header class="header">
    <div class="header-content">
      <button @click="$emit('toggle-menu')" class="menu-toggle md:hidden">
        <i class="icon-menu"></i>
      </button>
      <h1>Hello {{ userName }} 👋🏻</h1>
      <div class="mode-toggle">
        <button :class="{ active: mode === 'Paper' }" @click="setMode('Paper')">Paper</button>
        <button :class="{ active: mode === 'Live' }" @click="setMode('Live')">Live</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const userName = ref('Sam')
const mode = ref('Paper')
const setMode = (newMode) => {
  mode.value = newMode
}
</script>

<style scoped>
.header {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 10px 20px;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.mode-toggle {
  display: flex;
  background-color: #f3f4f6;
  border-radius: 20px;
  overflow: hidden;
}

.mode-toggle button {
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.mode-toggle button.active {
  background-color: #5D5FEF;
  color: white;
}

@media (min-width: 769px) {
  .header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 20px;
  }
}
</style>