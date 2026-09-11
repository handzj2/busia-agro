/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // V2 note: once media moves to Cloudinary/Supabase Storage, add the
    // remote domain(s) here so next/image can optimize hosted photos.
    remotePatterns: []
  }
};

module.exports = nextConfig;
