
# Retro Portfolio Website

A responsive retro-style portfolio website built with React and Tailwind CSS.

## Features

- Retro terminal-style UI with a nostalgic feel
- Responsive design that works on all device sizes
- Light and dark mode support
- Project showcase with detailed project pages
- Sections for About Me, Education, Projects, and Contact
- Easy to customize and extend

## How to Run Locally

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open your browser to `http://localhost:8080`

## How to Update Your Portfolio

### 1. Add/Update Your Information

Edit the data files in `src/data/portfolioData.jsx` to update:

- Personal information (name, title, contact details)
- Skills and their proficiency levels
- Education history
- Project details

### 2. Add/Replace Images

Place all your images in the appropriate folders:

- `/public/assets/` - For your profile photo and general assets
- `/public/assets/projects/` - For project thumbnails and screenshots
- `/public/assets/team/` - For team member photos

Example of adding a new photo:
1. Add your photo to `/public/assets/profile-photo.jpg`
2. Update the path in `portfolioData.jsx`:
   ```jsx
   photo: "/assets/profile-photo.jpg"
   ```

### 3. Add a New Project

To add a new project, add an entry to the `projects` array in `portfolioData.jsx`:

```jsx
{
  id: 4, // Make sure to use a unique ID
  title: "Your New Project",
  shortDescription: "Brief description of your project",
  description: [
    "Detailed paragraph about your project.",
    "Another paragraph with more details."
  ],
  technologies: ["React", "Node.js", "MongoDB"],
  thumbnail: "/assets/projects/your-project-thumbnail.jpg",
  images: [
    "/assets/projects/your-project-1.jpg",
    "/assets/projects/your-project-2.jpg",
  ],
  architectureDiagrams: [
    "/assets/projects/your-project-architecture.jpg"
  ],
  dbDiagrams: [
    "/assets/projects/your-project-db-diagram.jpg"
  ],
  isTeamProject: true,
  team: [
    { name: "Your Name", role: "Developer", photo: "/assets/profile-photo.jpg" },
    { name: "Team Member", role: "Designer", photo: "/assets/team/member.jpg" }
  ],
  github: "https://github.com/yourusername/your-project",
  liveUrl: "https://your-project.com"
}
```

### 4. Customize Colors and Styling

To change the color scheme:
1. Edit the CSS variables in `src/index.css` to adjust the light and dark themes
2. Update the retro color palette in `tailwind.config.ts`

## Project Structure

- `/src/components/` - React components
  - `/Layout/` - Layout components (Navbar, Footer)
  - `/Home/` - Home page section components
  - `/Projects/` - Project related components
- `/src/pages/` - Page components
- `/src/data/` - Data files
- `/public/assets/` - Images and other static assets

## Deployment

To deploy your portfolio:

1. Run `npm run build` to create a production build
2. Deploy the contents of the `dist` folder to your hosting provider

