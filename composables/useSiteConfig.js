export const useSiteConfig = () => {
  const config = useRuntimeConfig()
  
  // Site-specific themes
  const siteThemes = {
    'syndeo': {
      primaryColor: '#2563eb',
      logo: '/logos/syndeo-logo.svg'
    },
    'evolve-flow': {
      primaryColor: '#10b981',
      logo: '/logos/evolve-logo.svg'
    },
    'jiraflow': {
      primaryColor: '#8b5cf6',
      logo: '/logos/jiraflow-logo.svg'
    }
  }

  // Site-specific features
  const siteFeatures = {
    'syndeo': {
      showPricing: true,
      enableLanguageSwitcher: true,
      defaultLanguage: 'cs',
      languages: ['cs', 'en']
    },
    'evolve-flow': {
      showPricing: false,
      enableLanguageSwitcher: false,
      defaultLanguage: 'en',
      languages: ['en']
    },
    'jiraflow': {
      showPricing: true,
      enableLanguageSwitcher: false,
      defaultLanguage: 'en',
      languages: ['en'],
      enableExpertDirectory: true
    }
  }

  const siteSlug = config.public.siteSlug || 'syndeo'
  
  return {
    slug: siteSlug,
    name: config.public.siteName,
    theme: siteThemes[siteSlug],
    features: siteFeatures[siteSlug],
    directusUrl: config.public.directusUrl
  }
}