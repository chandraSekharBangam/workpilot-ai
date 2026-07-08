import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "",
  "/pricing",
  "/help-center",
  "/dashboard",
  "/chat",
  "/content-generator",
  "/image-generator",
  "/document-assistant",
  "/history",
  "/profile",
  "/settings",
  "/billing",
  "/notifications",
  "/admin",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
