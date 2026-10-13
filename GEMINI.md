# Antigravity / Gemini Workspace Rules for Nerivahealth

## Blog Post Creation Directive

Whenever the user requests the creation, generation, drafting, or addition of any **blog post, health article, patient guide, or exercise tutorial**:

1. **Activate the `neriva-blog` Skill:**
   - Always read and follow [`.agents/skills/neriva-blog/SKILL.md`](./.agents/skills/neriva-blog/SKILL.md).

2. **Always Execute the 5-Step Publishing SOP:**
   - **Step 1:** Select kebab-case slug, appropriate category, and relevant emoji.
   - **Step 2:** Generate custom 16:9 featured medical illustration using `generate_image` (clean clinical visual with glowing anatomical highlight, navy/teal tones, no text).
   - **Step 3:** Copy generated image artifact to `public/images/blog/<slug>.jpg`.
   - **Step 4:** Create `src/pages/blog/<slug>.md` using required Astro frontmatter, `.key-takeaways-box`, `.doctor-tip-box`, and clinic referral.
   - **Step 5:** Run `npm run build` and ensure all static pages render cleanly without warnings.
