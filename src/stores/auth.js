import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async register(name, email, password) {
      return this.signup(name, email, password)
    },
    async login(email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = this.findUser(email)
          if (user && user.password === password) {
            this.user = { email: user.email, name: user.name }
            this.isAuthenticated = true
            this.persistAuthState()
            resolve(this.user)
          } else {
            reject(new Error('Invalid email or password'))
          }
        }, 1000) // Simulate API delay
      })
    },
    async signup(name, email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.findUser(email)) {
            reject(new Error('Email already exists'))
          } else {
            const newUser = { name, email, password }
            localStorage.setItem(`user_${email}`, JSON.stringify(newUser))
            resolve(newUser)
          }
        }, 1000) // Simulate API delay
      })
    },
    async socialLogin(provider) {
      // Implement social login logic here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // This is a mock implementation. In a real app, you'd integrate with the social provider's SDK.
          const mockUser = { name: 'Social User', email: `user@${provider}.com` }
          this.user = mockUser
          this.isAuthenticated = true
          this.persistAuthState()
          resolve(mockUser)
        }, 1000)
      })
    },
    async forgotPassword(email) {
      // Implement forgot password logic here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = this.findUser(email)
          if (user) {
            // In a real app, you'd send an email with a reset link
            console.log(`Password reset email sent to ${email}`)
            resolve()
          } else {
            reject(new Error('User not found'))
          }
        }, 1000)
      })
    },
    async confirmEmail(email) {
      // Implement email confirmation logic here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = this.findUser(email)
          if (user) {
            // In a real app, you'd send a confirmation email
            console.log(`Confirmation email sent to ${email}`)
            resolve()
          } else {
            reject(new Error('User not found'))
          }
        }, 1000)
      })
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      this.clearAuthState()
    },
    async checkAuth() {
      const authState = localStorage.getItem('authState')
      if (authState) {
        const { user, isAuthenticated } = JSON.parse(authState)
        this.user = user
        this.isAuthenticated = isAuthenticated
      }
    },
    findUser(email) {
      const user = localStorage.getItem(`user_${email}`)
      return user ? JSON.parse(user) : null
    },
    persistAuthState() {
      localStorage.setItem('authState', JSON.stringify({
        user: this.user,
        isAuthenticated: this.isAuthenticated
      }))
    },
    clearAuthState() {
      localStorage.removeItem('authState')
    },
    async initializeAuth() {
      await this.checkAuth()
      // You can add more initialization logic here if needed
    }
  },
})