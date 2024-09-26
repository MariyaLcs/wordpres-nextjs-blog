# My Blog (Next.js + WordPress)

This project is a blog built using **Next.js** and **WordPress** as a headless CMS. The blog fetches posts from WordPress and displays them using modern web technologies like server-side rendering (SSR) and incremental static regeneration (ISR) for optimized performance.

The project was inspired by a YouTube tutorial by ByteGrad, with additional features and customizations added.

## Features

- **Fetch posts** from WordPress using the REST API.
- Display posts dynamically with **server-side rendering (SSR)** for fast content delivery.
- Optimized content loading using **Incremental Static Regeneration (ISR)**.
- **Responsive design** using Tailwind CSS for a clean, mobile-friendly interface.

## Technologies Used

- **Next.js** for server-side rendering (SSR) and incremental static regeneration (ISR).
- **WordPress** as a headless CMS for managing content.
- **Tailwind CSS** for modern and responsive styling.
- **Vercel** for deploying and managing the app.
- **REST API** to fetch posts from WordPress.

## Inspiration

This project was inspired by the YouTube tutorial ["Build a Next.js Blog (WordPress Headless, SSG & ISR, Cloudways)"](https://www.youtube.com/watch?v=dQw4w9WgXcQ) by ByteGrad. I followed the tutorial while adding my own customizations and features to enhance the functionality and appearance of the blog.

## Getting Started

To run this project locally:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your WordPress API URL to the .env.local file:
   WP_API_URL=https://public-api.wordpress.com/wp/v2/sites/YOUR_SITE_NAME
4. Run the development server:

```bash
   npm run dev
```

5. Open http://localhost:3000 in your browser to see the blog.
