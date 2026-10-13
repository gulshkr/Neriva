---
description: Automatically triggers the neriva-blog skill whenever the user asks to write, generate, or publish a blog post or medical guide.
trigger: model_decision
---

# Blog Post Creation Standard Rule

When the user asks to create, write, generate, add, or publish a blog post, article, health guide, or rehabilitation story:

1. **Mandatory Skill Activation:**
   - Immediately activate and follow the `neriva-blog` skill defined in `.agents/skills/neriva-blog/SKILL.md`.

2. **Quality Checklist:**
   - [ ] Dedicated 16:9 featured clinical image generated via `generate_image` and saved to `public/images/blog/<slug>.jpg`.
   - [ ] Frontmatter matches `layout: ../../layouts/BlogPost.astro` with title, description, date, category, readTime, image, icon.
   - [ ] Top element is `.key-takeaways-box` with 3 bullet points.
   - [ ] 3-5 structured subheadings with actionable physiological advice and bolded bullet labels.
   - [ ] Contains `.doctor-tip-box` quoting Dr. Abhishek Kumar (PT).
   - [ ] Mentions Nerivahealth Physiotherapy & Rehabilitation Centre, Sector 45, Faridabad.
   - [ ] Verification with `npm run build`.
