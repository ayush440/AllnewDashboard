<template>
  <div class="app-container">
    <Sidebar v-if="isAuthenticated" class="sidebar" :class="{ 'sidebar-mobile': isMobileMenuOpen }" />
    <div class="main-content" :class="{ 'ml-0': !isAuthenticated, 'ml-64': isAuthenticated }">
      <main class="content-area">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
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

onMounted(async () => {
  await authStore.checkAuth();
  if (!isAuthenticated.value && router.currentRoute.value.meta.requiresAuth) {
    router.push('/signin');
  }
});
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  transition: all 0.3s ease;
  z-index: 10;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  background-color: #ebf5ff;
}

.content-area {
  padding: 20px;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -250px;
    top: 0;
    bottom: 0;
  }

  .sidebar-mobile {
    left: 0;
  }

  .main-content {
    margin-left: 0;
  }
}

@media (min-width: 769px) {
  .main-content {
    margin-left: 250px;
  }
}
</style>