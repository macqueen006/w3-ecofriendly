import { useEffect } from 'react';

interface SEOProps {
    title?: string
    description?: string
    keywords?: string
    image?: string
    url?: string
    author?: string
    type?: string
}

export default function SEO({
    title,
    description,
    keywords,
    image,
    url,
    author = 'W3 Eco Friendly',
    type = 'website'
}: SEOProps) {
    useEffect(() => {
        if (title) {
            document.title = `${title}`
        }

        const setMetaTag = (name: string, content: string | undefined, isProperty = false) => {
            if (!content) return

            const attribute = isProperty ? 'property' : 'name'
            let element = document.querySelector(`meta[${attribute}="${name}"]`)

            if (!element) {
                element = document.createElement('meta')
                element.setAttribute(attribute, name)
                document.head.appendChild(element)
            }

            element.setAttribute('content', content)
        }

        // Basic meta tags
        setMetaTag('description', description)
        setMetaTag('keywords', keywords)
        setMetaTag('author', author)

        // Open Graph
        setMetaTag('og:title', title ? `${title} - W3 Eco Friendly` : 'W3 Eco Friendly', true)
        setMetaTag('og:description', description, true)
        setMetaTag('og:image', image, true)
        setMetaTag('og:url', url ? `https://w3eco-friendly.com${url}` : 'https://w3eco-friendly.com', true)
        setMetaTag('og:type', type, true)

        // Twitter Card
        setMetaTag('twitter:card', 'summary_large_image')
        setMetaTag('twitter:title', title ? `${title} - W3 Eco Friendly` : 'W3 Eco Friendly')
        setMetaTag('twitter:description', description)
        setMetaTag('twitter:image', image)

        // Canonical link
        if (url) {
            let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
            if (!canonical) {
                canonical = document.createElement('link')
                canonical.setAttribute('rel', 'canonical')
                document.head.appendChild(canonical)
            }
            canonical.setAttribute('href', `https://w3eco-friendly.com${url}`)
        }

    }, [title, description, keywords, image, url, author, type])

    return null // This component doesn't render anything
}