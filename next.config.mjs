/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fa'], // 'en' for English, 'fa' for Persian
        defaultLocale: 'en',   // Default language
        localeDetection: true, // Detect the language from the user's browser
    },
};

export default nextConfig;
