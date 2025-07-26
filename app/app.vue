<template>
  <div>
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-light tracking-wide mb-4">EVOLVE FLOW</h1>
        <h2 class="text-3xl font-light mb-6">A hybrid framework that flows with you</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Not another rigid methodology. EVOLVE dynamically adapts to your context,
          combining human intuition with AI intelligence to discover your unique flow patterns.
        </p>
        <div class="space-x-4">
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            See Patterns
          </button>
          <button class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Patterns Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-light text-center mb-12">Emerging Patterns from the Field</h2>
        
        <!-- Loading State -->
        <div v-if="pending" class="text-center">
          <p class="text-gray-500">Loading patterns...</p>
        </div>
        
        <!-- Error State -->
        <div v-else-if="error" class="text-center">
          <p class="text-red-500">Error loading patterns: {{ error.message }}</p>
        </div>
        
        <!-- Patterns Grid -->
        <div v-else class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="pattern in patterns" 
            :key="pattern.id"
            class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            :class="{
              'border-l-4 border-l-green-500': pattern.pattern_type === 'accelerator',
              'border-l-4 border-l-red-500': pattern.pattern_type === 'blocker'
            }"
          >
            <div class="flex justify-between items-start mb-3">
              <span class="text-sm text-gray-500 font-semibold">{{ pattern.pattern_number }}</span>
              <span 
                class="text-xs px-3 py-1 rounded-full uppercase font-semibold"
                :class="{
                  'bg-green-100 text-green-800': pattern.pattern_type === 'accelerator',
                  'bg-red-100 text-red-800': pattern.pattern_type === 'blocker'
                }"
              >
                {{ pattern.pattern_type }}
              </span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ pattern.title }}</h3>
            <p class="text-sm text-gray-500 mb-3">{{ pattern.context }}</p>
            <p class="text-blue-600 font-semibold mb-3">{{ pattern.effect }}</p>
            <p class="text-gray-600">{{ pattern.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Syndeo - Prague</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Simple direct API call since we know it works
const { data: patterns, pending, error } = await useAsyncData(
  'patterns',
  async () => {
    try {
      const response = await $fetch('https://syndeo.directus.app/items/patterns', {
        params: {
          'filter[status][_eq]': 'validated',
          limit: 3,
          sort: 'sort'
        }
      })
      console.log('Fetched patterns from Directus:', response.data)
      return response.data
    } catch (e) {
      console.error('Error fetching patterns:', e)
      // Return empty array if error
      return []
    }
  }
)
</script>

<style>
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
}
</style>