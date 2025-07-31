<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ heroContent.title }}
        </h1>
        <p class="text-xl mb-8">{{ heroContent.subtitle }}</p>
        <NuxtLink to="/services" class="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
          Explore Our Services
        </NuxtLink>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">{{ service.service_name }}</h3>
            <p class="text-gray-600 mb-4">{{ service.tagline }}</p>
            <p class="text-blue-600 font-semibold">{{ service.price_display }}</p>
            <NuxtLink :to="`/services/${service.slug}`" class="text-blue-600 hover:underline mt-4 inline-block">
              Learn More →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Evidence Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Proven Results</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Enterprise SaaS Platform</h3>
            <p class="text-gray-600 mb-4">75% reduction in manual operations through EVOLVE methodology</p>
            <ul class="text-gray-700 space-y-2">
              <li>• Automated workflows</li>
              <li>• Real-time visibility</li>
              <li>• Integrated systems</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Industry Best Practices</h3>
            <p class="text-gray-600 mb-4">12 validated workflow patterns ready for implementation</p>
            <ul class="text-gray-700 space-y-2">
              <li>• Quick wins identified</li>
              <li>• Proven solutions</li>
              <li>• Immediate impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const siteConfig = config.public.site

// Fetch services - note we're destructuring response.data
const { data: response } = await useFetch(`${config.public.directusUrl}/items/services`, {
  params: {
    filter: {
      status: {
        _eq: 'published'
      }
    },
    limit: 3
  }
})

// Extract the services array from the response
const services = computed(() => response.value?.data || [])

// Dynamic hero content based on site
const heroContent = computed(() => {
  const content = {
    syndeo: {
      title: "Transform Your Operations with Proven Intelligence",
      subtitle: "We help Czech businesses evolve through AI-human operational excellence"
    },
    evolveflow: {
      title: "Master the EVOLVE Methodology",
      subtitle: "Learn the framework that transforms chaos into competitive advantage"
    },
    jiraflow: {
      title: "Enterprise Jira Excellence",
      subtitle: "Connect with experts who deliver operational intelligence through Atlassian"
    }
  }
  return content[siteConfig.slug] || content.syndeo
})
</script>