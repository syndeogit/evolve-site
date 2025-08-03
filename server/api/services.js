export default defineEventHandler(async (event) => {
    try {
      // Fetch directly from Directus public endpoint
      const { data: services, pending, error } = await useFetch('/api/services')
      return response.data
    } catch (error) {
      console.error('Error fetching services:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch services'
      })
    }
  })