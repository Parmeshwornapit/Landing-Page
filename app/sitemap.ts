import type { MetadataRoute } from "next";

const siteUrl = "https://appointment.parmeshwornapit.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/thank-you`, lastModified: new Date() }
  ];
}
