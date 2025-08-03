<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-xl">Transform your operations with our proven methodologies</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="bg-gray-50 rounded-lg p-8">
            <h3 class="text-2xl font-bold mb-4">{{ service.service_name }}</h3>
            <p class="text-gray-600 mb-4">{{ service.tagline }}</p>
            <p class="text-3xl font-bold text-blue-600 mb-4">{{ service.price_display }}</p>
            <p class="text-gray-700 mb-6">{{ service.description }}</p>
            <NuxtLink to="/contact" class="text-blue-600 hover:text-blue-800 font-semibold">
              Learn More →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

// Use the same fetch pattern as homepage
const { data: response } = await useFetch(`${config.public.directusUrl}/items/services`, {
  params: {
    filter: {
      status: {
        _eq: 'published'
      }
    }
  }
})

// Extract the services array from the response
const services = computed(() => response.value?.data || [])
</script>