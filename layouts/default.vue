<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold">{{ siteConfig.name }}</h1>
          </div>
          <div class="flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">Home</NuxtLink>
            <NuxtLink to="/services" class="text-gray-700 hover:text-gray-900">Services</NuxtLink>
            <NuxtLink to="/case-studies" class="text-gray-700 hover:text-gray-900">Case Studies</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900">About</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-700 hover:text-gray-900">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p class="text-center">© 2024 {{ siteConfig.name }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const siteConfig = config.public.site
</script>