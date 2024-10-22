<template>
  <div class="">
    <!-- Mobile menu toggle button -->
    <button 
      v-if="isAuthenticated" 
      @click="toggleMobileMenu" 
      class="fixed top-4 left-4 z-50 md:hidden bg-[#5847f7] text-white p-2 rounded-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Sidebar -->
    <Sidebar 
      v-if="isAuthenticated" 
      :is-open="isMobileMenuOpen"
      @close="closeMobileMenu"
    />

    <!-- Main content -->
    <div 
      :class="[
        'main-content transition-all duration-300 ease-in-out',
        isAuthenticated ? 'md:ml-64' : 'ml-0'
      ]"
    >
      <main class="content-area">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import { useAuthStore } from './stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const isMobileMenuOpen = ref(false);

const isAuthenticated = computed(() => authStore.isAuthenticated);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(async () => {
  await authStore.checkAuth();
  if (!isAuthenticated.value && router.currentRoute.value.meta.requiresAuth) {
    router.push('/signin');
  }
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Close mobile menu when route changes
watch(router.currentRoute, () => {
  closeMobileMenu();
});

// Close mobile menu when screen size becomes larger than mobile breakpoint
const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
};
</script>

<style>
/* .app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {

  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  background-color: #ebf5ff;
}

.content-area {
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0 !important;
  }
} */
</style>