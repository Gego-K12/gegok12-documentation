import { useConfig } from 'nextra-theme-docs'

export default {
  project: {
    link: 'https://github.com/Gego-K12/gegok12'
  },
  logo: <span>Gego-K12</span>,
  footer: {
    text: null
  },

  // Force remove "– Nextra"
  useNextSeoProps() {
    return {
      titleTemplate: '%s',   // Remove suffix
      defaultTitle: 'Welcome to Gegok12'
    }
  },

  head: () => {
    const config = useConfig()
    const { title, frontMatter } = config
    const finalTitle = title || 'Welcome to Gegok12'
    const finalDesc = frontMatter.description || 'Learn how to use Gegok12.'

    return (
      <>
        <title>{finalTitle}</title>
        <meta property="og:title" content={finalTitle} />
        <meta name="description" content={finalDesc} />
        <meta property="og:description" content={finalDesc} />
        <meta name="twitter:title" content={finalTitle} />
        <meta name="twitter:description" content={finalDesc} />
      </>
    )
  }
}
