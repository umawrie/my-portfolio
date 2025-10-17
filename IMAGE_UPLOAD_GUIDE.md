# Image Upload Guide for Portfolio

## How to Upload Your Images

### 1. Navigate to the Project Folders
Your portfolio has individual folders for each project. Here's where to put your images:

#### Branding Projects:
- **TOYota**: `/public/images/branding/toyota/`
  - Upload as: `toyota-01.jpg`, `toyota-02.jpg`, `toyota-03.jpg`
- **HACS**: `/public/images/branding/hacs/`
  - Upload as: `hacs-website-01.jpg` through `hacs-website-07.jpg`
  - And: `hacs-social-01.jpg` through `hacs-social-05.jpg`
- **reground.**: `/public/images/branding/reground/`
  - Upload as: `reground-01.jpg`, `reground-02.jpg`, `reground-03.jpg`

#### Visuals Projects:
- **Unboxed**: `/public/images/visuals/unboxed/`
  - Upload as: `unboxed-01.jpg`, `unboxed-02.jpg`, `unboxed-03.jpg`
- **Voices in Motion**: `/public/images/visuals/voices/`
  - Upload as: `voices-01.jpg`, `voices-02.jpg`, `voices-03.jpg`
- **Fragmented Narratives**: `/public/images/visuals/fragmented/`
  - Upload as: `fragmented-01.jpg`, `fragmented-02.jpg`, `fragmented-03.jpg`

#### Fashion Projects:
- **Ephemeral Elegance**: `/public/images/fashion/ephemeral/`
  - Upload as: `ephemeral-01.jpg`, `ephemeral-02.jpg`, `ephemeral-03.jpg`
- **Drawn Threads**: `/public/images/fashion/drawn/`
  - Upload as: `drawn-01.jpg`, `drawn-02.jpg`, `drawn-03.jpg`
- **Canvas Denim**: `/public/images/fashion/canvas/`
  - Upload as: `canvas-01.jpg`, `canvas-02.jpg`, `canvas-03.jpg`

### 2. Image Requirements
- **Format**: JPG, PNG, or SVG
- **Size**: Recommended 1200x1200px or larger
- **File Size**: Keep under 2MB for fast loading
- **Naming**: Use the exact naming convention shown above

### 3. How It Works
1. Click any project card on the artwork page
2. You'll be taken to that project's individual page
3. All images from that project's folder will be displayed in a gallery
4. Images will automatically resize and optimize for web display

### 4. Testing Your Uploads
1. Upload your images to the correct folder
2. Run `npm run dev` to start the development server
3. Visit `http://localhost:3000/artwork`
4. Click on your project to see the images

### 5. HACS Project Specific Instructions
For your HACS project, you have 12 image slots:
- **Website images (1-7)**: Dashboard screenshots and UI
- **Social media images (8-12)**: Promotional graphics and slides

Upload your actual HACS images with these exact names:
- `hacs-website-01.jpg` (Loading screen)
- `hacs-website-02.jpg` (Login page)
- `hacs-website-03.jpg` (Dashboard overview)
- `hacs-website-04.jpg` (ADR Reports Dashboard)
- `hacs-website-05.jpg` (Occupancy Rate Dashboard)
- `hacs-website-06.jpg` (Revenue Dashboard)
- `hacs-website-07.jpg` (Revenue Dashboard continued)
- `hacs-social-01.jpg` (Main promotional graphic)
- `hacs-social-02.jpg` (AI-Driven Analytics slide)
- `hacs-social-03.jpg` (Smart Revenue Management slide)
- `hacs-social-04.jpg` (Future Ready slide)
- `hacs-social-05.jpg` (Additional promotional content)

### 6. Troubleshooting
- If images don't show up, check the file names match exactly
- Make sure images are in the correct folder
- Restart the development server after uploading new images
- Check the browser console for any error messages

## Current Status
✅ Project pages created
✅ Image directories set up
✅ Gallery system implemented
✅ Clickable project cards
⏳ Ready for your images!

Once you upload your images, they'll automatically appear on the individual project pages when visitors click on the project cards.
