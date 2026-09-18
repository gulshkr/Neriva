# Nerivahealth Physiotherapy & Rehabilitation Centre

Welcome to the source code for the **Nerivahealth** website. This project is built using [Astro](https://astro.build/), a modern and blazing-fast static site generator. It provides the simplicity of raw HTML/CSS for optimal local SEO speed, while offering a powerful Markdown-based blogging system.

## 🚀 Quick Start

To get this project running on your local machine:

1. **Install Dependencies:**
   Make sure you have Node.js installed. Open your terminal in the project folder and run:
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Astro will start a local server, usually at `http://localhost:4321`. Any changes you make to the code will instantly update in the browser without needing a refresh.

## 📁 Project Structure

Inside this project, you'll see the following key directories and files:

```text
/
├── public/
│   ├── images/       # All images (like logo.jpg) go here
│   ├── script.js     # Client-side JavaScript (mobile menu, smooth scroll)
│   └── style.css     # Global CSS and Design System
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # The main wrapper containing the Header & Footer
│   ├── pages/
│   │   ├── index.astro      # The Homepage
│   │   ├── blog/            
│   │   │   ├── index.astro  # The Blog listing page (Auto-generates from Markdown)
│   │   │   └── *.md         # Your actual blog posts!
└── astro.config.mjs  # Astro configuration
```

## ✍️ How to Publish a New Blog Post

Publishing new educational articles or patient stories is incredibly easy. You do not need to write any HTML.

1. Navigate to the `src/pages/blog/` folder.
2. Create a new file with a `.md` extension (e.g., `shoulder-pain-tips.md`).
3. At the very top of your new file, add the following "frontmatter" to define the post details:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: "Your Blog Title Here"
description: "A short 1-2 sentence description for SEO and the blog card."
date: "Oct 12, 2026"
category: "Education"
icon: "💡"
---

Start writing your blog content here in plain text.

You can use **bold text** or create lists:
- Item 1
- Item 2

## Use Hash Symbols for Headings
Just like this!
```

Once you save the file, Astro will automatically build the webpage and add a new card to the `blog.html` page!

## ✉️ Contact Form Setup (Important)

The contact form on the homepage is powered by [Web3Forms](https://web3forms.com/). Currently, it is using a placeholder key. 

Before going live:
1. Go to Web3Forms and enter the clinic's email address to receive your Access Key.
2. Open `src/pages/index.astro`.
3. Locate the hidden input field: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`.
4. Replace `YOUR_ACCESS_KEY_HERE` with your actual key.

## 🏗️ Building for Production

When you are ready to put the website on the live internet:

1. Stop the dev server (`Ctrl + C`).
2. Run the build command:
   ```bash
   npm run build
   ```
3. Astro will compile all your pages into static HTML and save them in a new folder called `dist/`.
4. Upload the contents of the `dist/` folder to your web host (Netlify, Vercel, Hostinger, etc.).
