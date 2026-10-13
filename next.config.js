/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // V2 note: once media moves to Cloudinary/Supabase Storage, add the
    // remote domain(s) here so next/image can optimize hosted photos.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    // Security headers applied by the Next.js application on every response.
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()"
      },
      // CSP tuned to this site: Next.js, Google Fonts (via next/font), Formspree,
      // Google Maps embed, WhatsApp links. No unnecessary wildcards.
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          "connect-src 'self' https://formspree.io",
          "frame-src 'self' https://www.google.com https://maps.google.com",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self' https://formspree.io",
          "object-src 'none'",
          "upgrade-insecure-requests"
        ].join("; ")
      }
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;
