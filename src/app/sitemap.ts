import type { MetadataRoute } from "next";

const base = "https://www.foundable.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/werkwijze",
    "/cases",
    "/score",
    "/over",
    "/start",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
