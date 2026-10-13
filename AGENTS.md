# Workspace Instructions for Nerivahealth (`gulshkr/Neriva`)

Welcome to the **Nerivahealth Physiotherapy & Rehabilitation Centre** repository.
All AI assistants, agents, and subagents operating in this repository must adhere to the following workspace rules:

---

## 1. Mandatory Blog & Article Creation Rule

Whenever the user asks to **create, write, generate, add, draft, or publish a new blog post, medical article, patient story, or rehabilitation guide** (e.g., *"write a blog on...", "create a new blog post about...", "generate an article on..."*):

### You MUST immediately activate and follow the `neriva-blog` Skill:
- Read and follow: [`.agents/skills/neriva-blog/SKILL.md`](./.agents/skills/neriva-blog/SKILL.md)

### Strict Requirements for Every Blog Post:
1. **Never generate plain, unstyled text or generic markdown without layout integration.**
2. **Every blog post MUST have a custom 16:9 featured clinical poster:**
   - Use `generate_image` with `AspectRatio: '16:9'`.
   - Follow the prompt formulas in [`.agents/skills/neriva-blog/references/image-prompts.md`](./.agents/skills/neriva-blog/references/image-prompts.md).
   - Copy the resulting image artifact to `public/images/blog/<slug>.jpg`.
3. **Strict Frontmatter Schema:**
   - Every file must be created at `src/pages/blog/<slug>.md` with `layout: ../../layouts/BlogPost.astro`, `title`, `description`, `date`, `category`, `readTime`, `image`, and `icon`.
4. **Mandatory Visual Callout Elements:**
   - `<div class="key-takeaways-box">` with 3 key takeaway bullets right after frontmatter.
   - `<div class="doctor-tip-box">` with `<div class="doctor-tip-badge">👨‍⚕️ Clinical Tip from Dr. Abhishek Kumar (PT)</div>`.
5. **Medical Authority & Attribution:**
   - Content must reflect clinical oversight by **Dr. Abhishek Kumar (PT)**, BPT, MPT (Orthopedics).
   - Include local SEO positioning for Nerivahealth Physiotherapy & Rehabilitation Centre, Sector 45, Faridabad.
6. **Build Verification:**
   - Always run `npm run build` after creating a new post to verify clean static site generation.

---

## 2. Brand Identity & Design Guidelines
- **Primary Color:** `#0F172A` (Deep Navy Blue)
- **Secondary Accent:** `#0D9488` (Teal Green)
- **Background Light:** `#F8FAFC`
- **Tone:** Medically authoritative, empathetic, accessible, and patient-first.
