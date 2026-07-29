/** @type {import('postcss-load-config').Config} */
const config = {
  // Tailwind v4 does its own vendor prefixing — autoprefixer would be a no-op.
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
