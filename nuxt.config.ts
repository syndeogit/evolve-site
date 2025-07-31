// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-directus'],
  
  runtimeConfig: {
    public: {
      site: {  // ← Changed to nested object
        slug: process.env.NUXT_PUBLIC_SITE_SLUG || 'syndeo',
        name: process.env.NUXT_PUBLIC_SITE_NAME || 'Syndeo',
        url: process.env.NUXT_PUBLIC_SITE_URL || 'https://syndeo.cz'
      },
      directusUrl: process.env.DIRECTUS_URL || 'https://syndeo.directus.app'
    }
  },

  app: {
    head: {
      title: process.env.NUXT_PUBLIC_SITE_NAME || 'Syndeo',
      meta: [
        { name: 'description', content: 'Transform your business operations with EVOLVE methodology' }
      ]
    }
  },

  directus: {
    url: process.env.DIRECTUS_URL || 'https://syndeo.directus.app'
  }
})