<template>
    <div class="flex min-h-screen">
      <!-- Left side with illustration -->
      <div class="hidden md:flex md:w-1/2 bg-[#0A0E1A] items-center justify-center p-12">
        <img :src="currentImage" alt="Illustration" class="max-w-full max-h-full object-contain" />
      </div>
  
      <!-- Right side with forms -->
      <div class="w-full md:w-1/2 bg-white flex items-center justify-center p-12">
        <div class="w-full max-w-md">
          <!-- Create Account Form -->
          <div v-if="currentScreen === 'create'">
            <h2 class="text-3xl font-bold mb-2 text-gray-800">Create your free account</h2>
            <p class="text-green-600 mb-6">✓ No credit card needed</p>
            <form @submit.prevent="handleCreateAccount">
              <input v-model="name" type="text" placeholder="Name" class="w-full px-3 py-2 mb-4 border rounded" required />
              <input v-model="email" type="email" placeholder="Email" class="w-full px-3 py-2 mb-4 border rounded" required />
              <input v-model="password" type="password" placeholder="Password" class="w-full px-3 py-2 mb-6 border rounded" required />
              <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700">Create account</button>
            </form>
            <p class="text-center mb-4">or sign in with</p>
            <div class="flex justify-center space-x-4 mb-6">
              <button @click="handleSocialLogin('facebook')" class="flex items-center justify-center px-4 py-2 border rounded">
                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                FACEBOOK
              </button>
              <button @click="handleSocialLogin('google')" class="flex items-center justify-center px-4 py-2 border rounded">
                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                GOOGLE
              </button>
            </div>
            <p class="text-center">
              Already have an account? 
              <a @click="currentScreen = 'login'" href="#" class="text-blue-600 hover:underline">Log in</a>
            </p>
            <p class="text-center mt-6 text-sm text-gray-600">
              By creating an account you accept our 
              <a href="#" class="text-blue-600 hover:underline">Terms of Service</a>
            </p>
          </div>
  
          <!-- Login Form -->
          <div v-if="currentScreen === 'login'">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Log in</h2>
            <form @submit.prevent="handleLogin">
              <input v-model="email" type="email" placeholder="Email" class="w-full px-3 py-2 mb-4 border rounded" required />
              <input v-model="password" type="password" placeholder="Password" class="w-full px-3 py-2 mb-4 border rounded" required />
              <div class="flex justify-between mb-6 text-sm">
                <a @click="currentScreen = 'forgotPassword'" href="#" class="text-blue-600 hover:underline">Forgot password?</a>
                <a @click="currentScreen = 'confirmEmail'" href="#" class="text-blue-600 hover:underline">Confirm email</a>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700">Log in</button>
            </form>
            <p class="text-center mb-4">or sign in with</p>
            <div class="flex justify-center space-x-4 mb-6">
              <button @click="handleSocialLogin('facebook')" class="flex items-center justify-center px-4 py-2 border rounded">
                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                FACEBOOK
              </button>
              <button @click="handleSocialLogin('google')" class="flex items-center justify-center px-4 py-2 border rounded">
                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                GOOGLE
              </button>
            </div>
            <p class="text-center">
              New to SVGator? 
              <a @click="currentScreen = 'create'" href="#" class="text-blue-600 hover:underline">Create account</a>
            </p>
          </div>
  
          <!-- Forgot Password Form -->
          <div v-if="currentScreen === 'forgotPassword'">
            <h2 class="text-3xl font-bold mb-2 text-gray-800">Password recovery</h2>
            <p class="mb-6 text-gray-600">We will send you an email containing a password reset link</p>
            <form @submit.prevent="handleForgotPassword">
              <input v-model="email" type="email" placeholder="Email" class="w-full px-3 py-2 mb-6 border rounded" required />
              <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded mb-6 hover:bg-blue-700">Send email</button>
            </form>
            <p class="text-center">
              <a @click="currentScreen = 'login'" href="#" class="text-blue-600 hover:underline">Back to login</a>
            </p>
          </div>
  
          <!-- Confirm Email Form -->
          <div v-if="currentScreen === 'confirmEmail'">
            <h2 class="text-3xl font-bold mb-2 text-gray-800">Confirm your email</h2>
            <p class="mb-6 text-gray-600">Please check your inbox for a confirmation email. Click the link in the email to confirm your email address.</p>
            <form @submit.prevent="handleConfirmEmail">
              <input v-model="email" type="email" placeholder="Email" class="w-full px-3 py-2 mb-6 border rounded" required />
              <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded mb-6 hover:bg-blue-700">Send email</button>
            </form>
            <p class="text-center">
              <a @click="currentScreen = 'login'" href="#" class="text-blue-600 hover:underline">Back to login</a>
            </p>
          </div>
  
          <!-- Error Message -->
          <div v-if="errorMessage" class="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {{ errorMessage }}
          </div>
  
          <!-- Success Message -->
          <div v-if="successMessage" class="mt-4 p-3 bg-green-100 text-green-700 rounded">
            {{ successMessage }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const currentScreen = ref('create')
const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const currentImage = computed(() => {
  const images = {
    create: '/placeholder.svg?height=600&width=600',
    login: '/placeholder.svg?height=600&width=600',
    forgotPassword: '/placeholder.svg?height=600&width=600',
    confirmEmail: '/placeholder.svg?height=600&width=600'
  }
  return images[currentScreen.value]
})

const handleCreateAccount = async () => {
  try {
    await authStore.register(name.value, email.value, password.value)
    successMessage.value = 'Account created successfully! Please log in.'
    errorMessage.value = ''
    currentScreen.value = 'login'
  } catch (error) {
    errorMessage.value = error.message || 'Failed to create account'
    successMessage.value = ''
  }
}
  
  const handleLogin = async () => {
    try {
      await authStore.login(email.value, password.value)
      successMessage.value = 'Logged in successfully!'
      errorMessage.value = ''
      await router.push('/')
    } catch (error) {
      errorMessage.value = error.message || 'Invalid email or password'
      successMessage.value = ''
    }
  }
  
  const handleSocialLogin = async (provider) => {
    try {
      await authStore.socialLogin(provider)
      successMessage.value = `Logged in with ${provider} successfully!`
      errorMessage.value = ''
      await router.push('/')
    } catch (error) {
      errorMessage.value = `Failed to login with ${provider}`
      successMessage.value = ''
    }
  }
  
  const handleForgotPassword = async () => {
    try {
      await authStore.forgotPassword(email.value)
      successMessage.value = 'Password reset email sent! Please check your inbox.'
      errorMessage.value = ''
    } catch (error) {
      errorMessage.value = error.message || 'Failed to send password reset email'
      successMessage.value = ''
    }
  }
  
  const handleConfirmEmail = async () => {
    try {
      await authStore.confirmEmail(email.value)
      successMessage.value = 'Confirmation email sent! Please check your inbox.'
      errorMessage.value = ''
    } catch (error) {
      errorMessage.value = error.message || 'Failed to send confirmation email'
      successMessage.value = ''
    }
  }
  </script>