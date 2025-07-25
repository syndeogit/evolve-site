
import { createDirectus, rest, staticToken } from '@directus/sdk'

export default defineNuxtPlugin(() => {
  // Create the Directus client
  const client = createDirectus('https://syndeo.directus.app', {
    rest: {
      onRequest: (options) => ({ ...options, cache: 'no-store' }),
    },
  }).with(rest())

  return {
    provide: {
      directus: client
    }
  }
})