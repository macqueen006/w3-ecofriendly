import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  type?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  author = siteConfig.shortName,
  type = "website",
  robots,
}: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;

    const setMetaTag = (name: string, content: string | undefined, isProperty = false) => {
      if (!content) return;
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const ensureLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);
    setMetaTag("author", author);
    if (robots) setMetaTag("robots", robots);

    // Open Graph
    setMetaTag("og:title", title ?? siteConfig.shortName, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", image ?? siteConfig.ogImage, true);
    setMetaTag("og:url", url ? `${siteConfig.url}${url}` : siteConfig.url, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:site_name", siteConfig.shortName, true);

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title ?? siteConfig.shortName);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image ?? siteConfig.ogImage);

    if (url) ensureLink("canonical", `${siteConfig.url}${url}`);
  }, [title, description, keywords, image, url, author, type, robots]);

  return null;
}
