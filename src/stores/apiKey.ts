import { defineStore } from 'pinia'

export const useApiKeyStore = defineStore({
  id: 'apiKey',
  state: (): {[key: string]: string} => ({
    key: import.meta.env.VITE_API_KEY
  })
})
