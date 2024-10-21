<template>
  <div class="home bg-gray-100 min-h-screen">
    <Header @toggle-menu="toggleMobileMenu" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <!-- Grid container for responsive layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <!-- Profit Section -->
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-lg font-semibold mb-2 text-center">Today's Profit</h2>
          <div class="w-full max-w-[250px] mx-auto">
            <DonutChart :data="profitData" />
          </div>
        </div>

        <!-- Sales Section -->
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-lg font-semibold mb-1 text-center">Today's Sales</h2>
          <p class="text-sm text-gray-500 mb-3 text-center">Sales Summary</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <StatCard
              v-for="(stat, index) in salesStats"
              :key="index"
              :title="stat.title"
              :value="stat.value"
              :change="stat.change"
              :icon="stat.icon"
            />
          </div>
        </div>
      </div>

      <!-- Positions Table Section -->
      <div class="mt-4 sm:mt-6 bg-white rounded-lg shadow-md overflow-hidden">
        <h2 class="text-lg font-semibold p-4 border-b">Positions</h2>
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

const salesStats = [
  { title: "Total Profit", value: "₹1k", change: "+8% from yesterday", icon: "TrendingUp" },
  { title: "Strategy Deployed", value: "32", change: "+4% from yesterday", icon: "Zap" },
  { title: "Total Orders", value: "53", change: "+3% from yesterday", icon: "ShoppingCart" },
]

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
.home {
  max-width: 100%;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .home {
    font-size: 14px;
  }
}
</style>