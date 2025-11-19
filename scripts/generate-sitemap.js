// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://isagarjaiswal.netlify.app';

// Define your routes with custom priorities
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/projects', priority: 0.9 },
  { path: '/contact', priority: 0.6 },

  // Add your project detail pages here
  // { path: '/projects/project-slug', priority: 0.7 },
];

// Convert routes into XML
const urls = routes
  .map(
    (r) => `
  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r.priority}</priority>
  </url>
`
  )
  .join('\n');

// Final XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemap.trim());
