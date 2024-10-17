<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="flex justify-between items-center p-6">
      <h2 class="text-xl font-semibold">Positions</h2>
      <button @click="router.push('/positions')" class="text-indigo-600 hover:text-indigo-800">All</button>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="bg-gray-50 text-left">
            <th class="py-3 px-4 font-semibold text-gray-600">STRATEGY NAME</th>
            <th class="py-3 px-4 font-semibold text-gray-600">VALUE</th>
            <th class="py-3 px-4 font-semibold text-gray-600">ACTION</th>
            <th class="py-3 px-4 font-semibold text-gray-600">TIME</th>
            <th class="py-3 px-4 font-semibold text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(position, index) in positionsStore.positions" :key="position.id">
            <tr :class="{'bg-gray-50': index % 2 === 0, 'bg-white': index % 2 !== 0}">
              <td class="py-3 px-4">{{ position.strategy }}</td>
              <td class="py-3 px-4">{{ position.buyPrice }}</td>
              <td class="py-3 px-4">{{ position.side }}</td>
              <td class="py-3 px-4">{{ position.sellPrice }}</td>
              <td class="py-3 px-4">
                <button v-if="position.status === 'CLOSED'" class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                  Square off
                </button>
                <button v-else @click="toggleDetails(index)" class="text-gray-400">
                  <component :is="expandedRows[index] ? ChevronUp : ChevronRight" class="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr v-if="expandedRows[index]" :class="{'bg-gray-50': index % 2 === 0, 'bg-white': index % 2 !== 0}">
              <td colspan="5" class="py-3 px-4">
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(value, key) in position" :key="key" class="flex flex-col">
                    <span class="text-sm text-gray-500">{{ key }}</span>
                    <span class="font-medium">{{ value }}</span>
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronRight, ChevronUp } from 'lucide-vue-next'
import { usePositionStore } from '../stores/positions.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const positionsStore = usePositionStore()
const expandedRows = ref({})

const toggleDetails = (index) => {
  expandedRows.value[index] = !expandedRows.value[index]
}

onMounted(() => {
  positionsStore.fetchPositions()
})
</script>