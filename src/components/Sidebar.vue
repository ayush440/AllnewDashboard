<template>
  <div 
    :class="[
      'sidebar fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0'
    ]"
  >
    <div class="flex flex-col h-full">
      <div class="p-4 border-b border-gray-200">
        <div class="flex items-center">
          <img src="../assets/images/bg.jpg" alt="" class="w-10 h-10 mr-2" />
          <span class="text-xl font-bold text-gray-800">Logo Here</span>
        </div>
      </div>
      
      <nav class="flex-1 overflow-y-auto py-4">
        <div class="px-4 space-y-2">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path" 
            :class="[ 
              'nav-item flex items-center px-4 py-2 text-gray-700 rounded-lg transition-colors duration-200',
              $route.path === item.path ? 'bg-[#5847f7] text-white' : 'hover:bg-[#5847f7] hover:text-white'
            ]"
            @click="$emit('close')"
          >
            <i :class="['mr-3', item.icon]"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </div>
      </nav>
      
      <div class="p-4 border-t border-gray-200">
        <div class="flex items-center mb-4">
          <img src="../assets/images/profile.jpg" alt="Admin Profile" class="w-12 h-12 rounded-full mr-3 object-cover" />
          <div>
            <h3 class="text-gray-800 font-semibold">{{ authStore.user?.name || 'Guest' }}</h3>
            <p class="text-gray-600 text-sm">{{ authStore.user?.email || 'guest@example.com' }}</p>
          </div>
        </div>
        <router-link @click="$emit('close')" to="/profile" class="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
          <i class="icon-userroshni mr-3"></i>
          <span>View Profile</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const route = useRoute()
const authStore = useAuthStore()

const menuItems = [
  { name: 'Home', path: '/', icon: 'icon-home' },
  { name: 'Strategy', path: '/strategy', icon: 'icon-strategy' },
  { name: 'Broker', path: '/broker', icon: 'icon-broker' },
  { name: 'Orders', path: '/orders', icon: 'icon-orders' },
  { name: 'Positions', path: '/positions', icon: 'icon-positions' },
  { name: 'Tutorials', path: '/tutorials', icon: 'icon-tutorials' },
]
</script>

<style scoped>
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    max-width: 300px;
  }
}
</style>