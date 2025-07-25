// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      title: 'EVOLVE FLOW - A hybrid framework that flows with you',
      meta: [
        { name: 'description', content: 'Not another rigid methodology. EVOLVE dynamically adapts to your context.' }
      ]
    }
  }
})