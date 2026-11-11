import { MetadataRoute } from "next";
import { TRAVEL_GUIDES } from "@/data/esimData";
import { DESTINATIONS } from "@/data/destinations";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://e-sim.nilesupplies.com";

  const destinationUrls = DESTINATIONS.map((d) => ({
    url: baseUrl + "/destinations/" + d.slug,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const guideUrls = TRAVEL_GUIDES.map((guide) => ({
    url: baseUrl + "/guides/" + guide.slug,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: baseUrl + "/blog/" + post.slug,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: baseUrl + "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/legal",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...destinationUrls,
    ...guideUrls,
    ...blogUrls,
  ];
}
