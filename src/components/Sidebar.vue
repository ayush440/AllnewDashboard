<template>
  <div class="sidebar" :class="{ 'sidebar-mobile': isMobileMenuOpen }">
    <div class="logo text-black font-bold mb-8">
      <img src="../assets/images/bg.jpg" alt="" class="w-10 h-10 mr-2" />
      Logo Here
    </div>
    
    <!-- Navigation Links -->
    <button @click="toggleMobileMenu" class="mobile-menu-toggle md:hidden">
      <i class="icon-menu"></i>
    </button>
    <nav :class="{ 'hidden': !isMobileMenuOpen, 'md:block': true }">
      <div>
        <router-link 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path" 
          :class="[ 
            'nav-item',
            'transition-all duration-50 rounded-lg cursor-pointer',
            $route.path === item.path ? 'active bg-[#5847f7] text-white' : 'hover:bg-[#5847f7] hover:text-white'
          ]"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </nav>
    
    <!-- Admin Profile and View Profile Section at the Bottom -->
    <div class="bottom-wrapper mt-auto">
      <div class="admin-profile mb-8">
        <img src="../assets/images/profile.jpg" alt="Admin Profile" class="w-16 h-16 rounded-full mx-auto mb-2 object-cover" />
        <h3 class="text-center text-gray-800 font-semibold">Sam Wheeler</h3>
        <p class="text-center text-gray-600 text-sm">samwheeler@example.com</p>
      </div>
      
      <router-link to="/profile" class="view-profile">
        <i class="icon-userroshni"></i>
        <span>View Profile</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showUserMenu = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/', icon: 'icon-home' },
  { name: 'Strategy', path: '/strategy', icon: 'icon-strategy' },
  { name: 'Broker', path: '/broker', icon: 'icon-broker' },
  { name: 'Orders', path: '/orders', icon: 'icon-orders' },
  { name: 'Positions', path: '/positions', icon: 'icon-positions' },
  { name: 'Tutorials', path: '/tutorials', icon: 'icon-tutorials' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const refreshData = () => {
  // Implement refresh logic
}

const logout = () => {
  // Implement logout logic
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: white;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: grey;
  border-radius: 8px;
  height: 40px;
}

.nav-item:hover, .nav-item.active {
  color: white;
}

.bottom-wrapper {
  margin-top: auto; /* Makes the content go to the bottom */
  text-align: center;
}

.view-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  text-decoration: none;
  color: grey;
  border-radius: 8px;
}

.view-profile:hover {
  background-color: #5847f7;
  color: white;
}

.mobile-menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar-mobile {
    transform: translateX(0);
  }

  .mobile-menu-toggle {
    display: block;
    position: absolute;
    top: 20px;
    right: -40px;
    background-color: #5847f7;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 0 5px 5px 0;
  }
}
</style>
