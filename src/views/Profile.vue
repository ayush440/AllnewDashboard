<template>
  <div class="profile-page bg-[#ebf5ff] min-h-screen p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Profile</h1>

      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex items-center mb-6">
          <img src="../assets/images/profile.jpg" alt="Profile Picture" class="w-24 h-24 rounded-full mr-6 object-cover" />
          <div>
            <h2 class="text-2xl font-semibold text-gray-800">Welcome Kuldeep,</h2>
            <p class="text-gray-600">Trader</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Contact Details</h3>
            <p class="text-gray-600">kuldeep@gmail.com</p>
            <p class="text-gray-600">+91 9689898958</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-semibold text-gray-800">Profile</h3>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Edit</button>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" value="kuldeep" class="w-full p-2 border border-gray-300 rounded-md" readonly />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Change Profile Picture</label>
              <div class="flex items-center">
                <label class="cursor-pointer bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  Choose File
                  <input type="file" class="hidden" />
                </label>
                <span class="ml-3 text-sm text-gray-500">No file chosen</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-semibold text-gray-800">Social</h3>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Edit</button>
            </div>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Tradingview ID</label>
                <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Telegram API</label>
                <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Telegram Chat ID</label>
                <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-semibold text-gray-800">Billing</h3>
              <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">Create Invoice</button>
            </div>
            <p class="text-gray-600">Record not found!!</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Change Password</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input type="password" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input type="password" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input type="password" class="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Quote of the Day</h3>
            <p class="text-gray-600 italic">
              "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
            </p>
          </div>
        </div>
      </div>

      <div class="mt-8 flex">
        <button @click="handleLogout" class="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition-colors w-full max-w-md">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>
