<template>
  <div class="home bg-gray-100 min-h-screen  mx-auto px-4 sm:px-10 lg:px-8">
    <Header @toggle-menu="toggleMobileMenu" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <!-- Grid container for responsive layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Profit Section -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 class="text-lg sm:text-xl font-semibold mb-4 text-center">Today's Profit</h2>
          <div class="w-full max-w-xs mx-auto">
            <DonutChart :data="profitData" />
          </div>
        </div>

        <!-- Sales Section -->
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 class="text-lg sm:text-xl font-semibold mb-2 text-center">Today's Sales</h2>
          <p class="text-sm text-gray-500 mb-4 text-center">Sales Summary</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              title="Total Profit"
              value="₹1k"
              change="+8% from yesterday"
              icon="TrendingUp"
            />
            <StatCard
              title="Strategy Deployed"
              value="32"
              change="+4% from yesterday"
              icon="Zap"
            />
            <StatCard
              title="Total Orders"
              value="53"
              change="+3% from yesterday"
              icon="ShoppingCart"
            />
          </div>
        </div>
      </div>

      <!-- Positions Table Section -->
      <div class="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
        <h2 class="text-lg sm:text-xl font-semibold p-4 sm:p-6 border-b">Positions</h2>
        <div class="overflow-x-auto">
          <PositionsTable :positions="positions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import DonutChart from '../components/DonutChart.vue'
import StatCard from '../components/StatCard.vue'
import PositionsTable from '../components/PositionsTable.vue'
import Header from '../components/Header.vue'

const authStore = useAuthStore()

const profitData = ref([
  { name: 'Strategy 1', value: 25, color: '#FF6384' },
  { name: 'Strategy 2', value: 25, color: '#36A2EB' },
  { name: 'Strategy 3', value: 30, color: '#FFCE56' },
  { name: 'Strategy 4', value: 20, color: '#4BC0C0' },
])

const positions = ref([
  { name: 'Super Hero Strategy', value: '17', action: 'Buy', time: '02:32AM' },
  { name: 'Super Hero Strategy', value: '17', action: 'Buy', time: '02:32AM' },
  { name: 'Super Hero Strategy', value: '17', action: 'Buy', time: '02:32AM' },
  { name: 'Broker Angel-A423683', buyPrice: '₹543.56', sellPrice: '₹643.56', action: 'Square off' },
  { name: 'Super Hero Strategy', value: '17', action: 'Buy', time: '02:32AM' },
])

onMounted(() => {
  authStore.checkAuth()
})

const toggleMobileMenu = () => {
  console.log('Toggle mobile menu')
}
</script>

<style scoped>
/* Ensure no overflow on smaller screens */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.home {
  max-width: 100%;
  overflow-x: hidden;
}

.max-w-7xl {
  width: 100%;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .home {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
