import type { MetadataRoute } from "next";
import { artikelen } from "@/content/kennis";

const base = "https://www.foundable.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/werkwijze",
    "/cases",
    "/kennis",
    "/score",
    "/over",
    "/start",
    "/contact",
  ];

  const paginas: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const kennisArtikelen: MetadataRoute.Sitemap = artikelen.map((a) => ({
    url: `${base}/kennis/${a.slug}`,
    lastModified: new Date(`${a.gepubliceerd}T12:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...paginas, ...kennisArtikelen];
}
