import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
  project: {
    link: 'https://github.com/Gego-K12/gegok12-documentation'
  },
  logo: <span>Gego-K12</span>,
  footer: {
    text: null
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return <div style={{ fontWeight: 'bold', marginTop: '1em' }}>{title}</div>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1, // How many levels to show by default
    toggleButton: true, // Show/hide toggle button
  },
  editLink: {
    text: 'Edit this page on GitHub',
    component: ({ children, filePath }) => (
      <a href={`https://github.com/Gego-K12/gegok12-documentation/edit/main/${filePath}`}>
        {children}
      </a>
    )
  },
  // Feedback link
  feedback: {
    content: 'Question? Give us feedback →',
    useLink: () => {
      const config = useConfig()
      const router = useRouter()
      const title = config.title || 'Documentation Feedback'
      const path = router.pathname
      const fullUrl = `https://docs.gegok12.com/${router.asPath}`
      return `https://github.com/Gego-K12/gegok12-documentation/issues/new?labels=feedback&title=${encodeURIComponent('Feedback: ' + title)}&body=${encodeURIComponent(`**Page URL:** ${fullUrl}\n**Page Path:** ${path}\n\n**Feedback:**\n\n`)}`
    }
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
