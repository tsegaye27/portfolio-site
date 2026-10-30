/** @type {import('next').NextConfig} */
const nextConfig = {
  // Chatty reads these at runtime; make sure they ship with the function.
  outputFileTracingIncludes: { "/api/chatty": ["./knowledge/**/*.md"] },
};

export default nextConfig;
