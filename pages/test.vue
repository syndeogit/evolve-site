<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer class="py-12">
      <!-- Test Card -->
      <UCard class="mb-8">
        <template #header>
          <h2 class="text-2xl font-bold">Nuxt UI Components Test</h2>
        </template>
        
        <div class="space-y-4">
          <!-- Buttons -->
          <div>
            <h3 class="font-semibold mb-2">Buttons:</h3>
            <div class="flex gap-2 flex-wrap">
              <UButton>Default</UButton>
              <UButton color="primary">Primary</UButton>
              <UButton color="gray" variant="ghost">Ghost</UButton>
              <UButton color="red" variant="soft">Soft Red</UButton>
              <UButton size="xs">Extra Small</UButton>
              <UButton size="xl">Extra Large</UButton>
            </div>
          </div>

          <!-- Badges -->
          <div>
            <h3 class="font-semibold mb-2">Badges:</h3>
            <div class="flex gap-2">
              <UBadge>Default</UBadge>
              <UBadge color="primary">Primary</UBadge>
              <UBadge color="green" variant="soft">Success</UBadge>
              <UBadge color="red" variant="outline">Error</UBadge>
            </div>
          </div>

          <!-- Alert -->
          <UAlert 
            icon="i-heroicons-check-circle"
            color="green"
            title="Success!"
            description="Nuxt UI components are working correctly."
          />

          <!-- Input -->
          <div>
            <h3 class="font-semibold mb-2">Form Input:</h3>
            <UInput placeholder="Type something..." />
          </div>
        </div>

        <template #footer>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">If you see styled components above, everything is working!</span>
            <UButton to="/" variant="link" trailing-icon="i-heroicons-arrow-right">
              Back to Home
            </UButton>
          </div>
        </template>
      </UCard>

      <!-- Test Icons -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Icon Test</h3>
        </template>
        <div class="flex gap-4">
          <UIcon name="i-heroicons-home" class="w-6 h-6" />
          <UIcon name="i-heroicons-user" class="w-6 h-6" />
          <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6" />
          <UIcon name="i-heroicons-check" class="w-6 h-6 text-green-500" />
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
// No imports needed - Nuxt UI components are auto-imported
</script>