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
│   │   ├── Layout.astro     # The main wrapper containing the Header & Footer
│   │   └── BlogPost.astro   # Wrapper specifically for blog posts
│   ├── pages/
│   │   ├── index.astro      # The Homepage
│   │   ├── about/           # About Us page
│   │   ├── conditions/      # Pages for different conditions treated
│   │   ├── rehabilitation/  # Pages for rehabilitation services
│   │   ├── blog/            
│   │   │   ├── index.astro  # The Blog listing page (Auto-generates from Markdown)
│   │   │   └── *.md         # Your actual blog posts!
└── astro.config.mjs  # Astro configuration
```

## ✍️ How to Publish a New Blog Post

### Recommended: Use the AI Skill (`neriva-blog`)
This workspace includes a specialized Antigravity skill located at [`.agents/skills/neriva-blog/SKILL.md`](./.agents/skills/neriva-blog/SKILL.md).
Whenever you ask Antigravity or any AI coding model in this repo:
> *"Write a new blog post about [condition or treatment]"*

The model will automatically:
1. Generate a custom 16:9 medical illustration via AI and save it to `public/images/blog/`.
2. Format the post with rich visual callouts (`.key-takeaways-box`, `.doctor-tip-box`, and `.exercise-card`).
3. Attribute clinical authority to **Dr. Abhishek Kumar (PT)** and include local SEO for Sector 45, Faridabad.
4. Verify the build with `npm run build`.

### Manual Blog Creation
1. Navigate to `src/pages/blog/`.
2. Create `<slug>.md` (e.g. `sciatica-relief-tips.md`).
3. Add the complete frontmatter schema:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: "Your Blog Title Here"
description: "A short 1-2 sentence description for SEO and the blog card."
date: "Oct 13, 2026"
category: "Orthopedics & Spine"
readTime: "5 min read"
image: "/images/blog/your-slug.jpg"
icon: "💡"
---

<div class="key-takeaways-box">
    <h4>📌 Key Takeaways</h4>
    <ul>
        <li>Takeaway point 1</li>
        <li>Takeaway point 2</li>
    </ul>
</div>

Your content here...

<div class="doctor-tip-box">
    <div class="doctor-tip-badge">👨‍⚕️ Clinical Tip from Dr. Abhishek Kumar (PT)</div>
    <p>"Your clinical advice quote here..."</p>
</div>
```

## ✉️ Contact Form Setup (Important)

The contact form on the homepage is powered by [Web3Forms](https://web3forms.com/). Currently, it is using a placeholder key. 

Before going live:
1. Go to Web3Forms and enter the clinic's email address to receive your Access Key.
2. Open `src/pages/index.astro`.
3. Locate the hidden input field: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`.
4. Replace `YOUR_ACCESS_KEY_HERE` with your actual key.

## 📱 Social Media Channels

- **Instagram:** [@nerivahealth_physio_rehab](https://www.instagram.com/nerivahealth_physio_rehab/)
- **WhatsApp:** [+91 9650940281](https://wa.me/919650940281)

## 🏗️ Building for Production

When you are ready to put the website on the live internet:

1. Stop the dev server (`Ctrl + C`).
2. Run the build command:
   ```bash
   npm run build
   ```
3. Astro will compile all your pages into static HTML and save them in a new folder called `dist/`.
4. Upload the contents of the `dist/` folder to your web host (Netlify, Vercel, Hostinger, etc.).
