# AI Image Generation Prompt Guide for Nerivahealth Blog

When generating blog posters using `generate_image`:
- Always specify `AspectRatio: '16:9'`.
- Use `ImageName: '<slug>_poster'`.
- Target the Neriva color aesthetic: Deep Navy (`#0F172A`), Teal Green (`#0D9488`), White, and warm clinical lighting.
- Include a 3D anatomical translucent overlay showing the affected bones/muscles/nerves to give it a high-tech medical feel.
- Never request text or words in the prompt.

---

## Condition-Specific Prompt Formulas

### 1. Spine & Back Pain (Lumbar / Thoracic)
```text
Professional modern medical 3D graphic and clinical photography blend illustrating human lumbar spine and lower back anatomy. Soft natural lighting in a contemporary physiotherapy clinic background, deep navy blue (#0F172A) and teal (#0D9488) accents, transparent glowing blue anatomical overlay highlighting spinal discs and vertebrae alignment, realistic, clean medical aesthetic, 16:9 aspect ratio, no text.
```

### 2. Sciatica & Radiating Nerve Pain
```text
Modern clinical medical illustration showing lower back and hip anatomy with sciatic nerve path highlighted in glowing translucent cyan-teal light. Professional physiotherapy treatment room environment, soft cinematic depth of field, deep navy and teal accents, high resolution, realistic 3D anatomical detail, clean medical aesthetic, no text.
```

### 3. Neck Pain & Desk Ergonomics (Tech Neck / Cervical)
```text
Professional photography and 3D medical visual blend of cervical spine and neck posture in an ergonomic workspace setting. Modern minimalist desk environment, soft natural window light, subtle glowing cyan overlay of the cervical vertebrae and shoulder trapezius muscles, deep navy and teal color scheme, hyper-detailed, clean medical aesthetic, no text.
```

### 4. Knee Pain & Osteoarthritis
```text
Detailed 3D anatomical graphic and clinical photography blend of a human knee joint, showing patellar tendon, meniscus, and joint cartilage with a glowing translucent highlight. Modern rehabilitation clinic aesthetic with deep navy blue background and teal green lighting accents, crisp focus, high resolution medical imagery, no text.
```

### 5. Shoulder Pain & Rotator Cuff / Frozen Shoulder
```text
Professional modern medical 3D visual showing human glenohumeral shoulder joint and rotator cuff muscles. Soft cinematic clinical lighting, navy blue and teal green tones, translucent glowing anatomical highlight of shoulder capsule and tendons, realistic physiotherapy rehab atmosphere, ultra high definition, no text.
```

### 6. Post-Operative Joint Replacement Recovery
```text
Modern orthopedic recovery visual blend showing gentle assisted physical therapy mobility for a recovering knee joint. Clean modern rehabilitation clinic, soft morning light, subtle glowing biological joint alignment overlay, professional physiotherapy aesthetic in teal and navy, peaceful, encouraging, no text.
```

### 7. Sports Injury & Ankle / Ligament Sprain
```text
Dynamic yet clean medical 3D visualization of ankle ligaments and Achilles tendon during athletic movement. Deep navy blue background, sharp teal highlighting on the lateral ligaments, high definition anatomical clarity, sports physical therapy aesthetic, no text.
```

---

## Post-Processing Step
After generating the image:
1. Locate the file in `<appDataDir>\brain\<conversation-id>\<filename>.jpg`
2. Run PowerShell command:
   ```powershell
   Copy-Item "<ARTIFACT_IMAGE_PATH>" "public\images\blog\<slug>.jpg" -Force
   ```
3. Set frontmatter: `image: "/images/blog/<slug>.jpg"`
