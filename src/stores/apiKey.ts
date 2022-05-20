import { defineStore } from 'pinia'

export const useApiKeyStore = defineStore({
  id: 'apiKey',
  state: (): {[key: string]: string} => ({
    key: "6919f5aa4f73b1980cf46715fd153031"
  })
})
