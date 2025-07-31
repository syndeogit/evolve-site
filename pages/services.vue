<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center mb-12">Our Services</h1>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2">{{ service.service_name }}</h2>
            <p class="text-gray-600 mb-4">{{ service.tagline }}</p>
            
            <div class="mb-4">
              <p class="text-sm text-gray-500">Ideal for:</p>
              <p class="text-gray-700">{{ service.ideal_for }}</p>
            </div>
            
            <div class="mb-4">
              <p class="text-sm text-gray-500">Duration:</p>
              <p class="text-gray-700">{{ service.duration }}</p>
            </div>
            
            <div class="mb-6">
              <p class="text-2xl font-bold text-blue-600">{{ service.price_display }}</p>
              <p v-if="service.price_note" class="text-sm text-gray-500">{{ service.price_note }}</p>
            </div>
            
            <NuxtLink :to="`/services/${service.slug}`" class="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const siteConfig = config.public.site

// Fetch all services for this site
const { data: services } = await useFetch(`${config.public.directusUrl}/items/services`, {
  params: {
    filter: {
      featured_sites: {
        _contains: siteConfig.slug
      },
      status: {
        _eq: 'published'
      }
    },
    sort: ['sort']
  }
})
</script>