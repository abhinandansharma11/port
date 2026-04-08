# Personal Portfolio Website

A clean, minimal, and professional portfolio website for a software developer. Built with vanilla JavaScript, Express.js, and Node.js.

## 🚀 Features

- **Clean, Minimal Design**: Professional aesthetic inspired by Linear, Vercel, and Notion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Single Page Application**: Smooth scrolling with no page reloads
- **Dynamic Projects**: Load project data from `projects.json`
- **Contact Form**: Email submission using Nodemailer
- **Scroll Animations**: Fade-in effects using IntersectionObserver API
- **Mobile Menu**: Hamburger navigation on smaller screens
- **No External Frameworks**: Pure HTML, CSS, and Vanilla JavaScript

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html      ← Main HTML file
│   ├── styles.css      ← All styling with CSS variables
│   ├── script.js       ← Vanilla JavaScript (no frameworks)
│   └── resume.pdf      ← Your resume (add your file here)
├── data/
│   └── projects.json   ← Project data (edit this with your projects)
├── server.js           ← Express server
├── package.json        ← Node dependencies
├── .env                ← Environment variables (EMAIL_USER, EMAIL_PASS)
└── README.md           ← This file
```

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email (for contact form)

The contact form uses **Nodemailer** to send emails. You need to set up email credentials.

#### Using Gmail (Recommended):

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows Computer" (or your device)
4. Google will generate a 16-character app password
5. Copy this password and update your `.env` file:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

#### Using Other Email Services:

Nodemailer supports many services. See the [Nodemailer documentation](https://nodemailer.com/smtp/well-known/) for other options (Outlook, Yahoo, etc.).

### 3. Update Your Information

Edit the following files to add your personal information:

#### `public/index.html`
- Change "John Doe" to your name (appears in navbar and hero section)
- Update the hero subtitle
- Update the about section text
- Update contact information (email, LinkedIn, GitHub links)

#### `data/projects.json`
- Replace sample projects with your actual projects
- Format:
  ```json
  {
    "title": "Project Name",
    "description": "Short description",
    "tech": ["Technology", "Stack"],
    "liveUrl": "https://live-link.com",
    "codeUrl": "https://github.com/link"
  }
  ```

#### `public/resume.pdf`
- Add your resume as a PDF file in the `public/` folder
- The "Download Resume" button links to `/resume.pdf`

### 4. Customize Design (Optional)

All colors, fonts, and spacing are defined as CSS variables in `public/styles.css`:

```css
:root {
  --color-accent: #2563eb;        /* Primary blue - change this to your preferred color */
  --color-text: #0f0f0f;          /* Near-black text */
  --font-family: 'Inter', ...     /* Font from Google Fonts */
}
```

Adjust these values to match your brand.

### 5. Run the Server

```bash
npm start
```

The server will start at `http://localhost:3000`

Visit the URL in your browser and test all functionality:
- Check responsive design on mobile
- Test the contact form
- Verify all buttons and links work

## 📝 Customization Guide

### Adding More Skills

In `public/index.html`, find the Skills section and add more skill categories:

```html
<div class="skill-category">
  <h3 class="skill-category-title">New Category</h3>
  <div class="skill-tags">
    <span class="skill-tag">Skill 1</span>
    <span class="skill-tag">Skill 2</span>
  </div>
</div>
```

### Changing Colors

All colors use CSS variables. Modify these in `public/styles.css`:

- `--color-accent`: Primary action color (buttons, hover states)
- `--color-text`: Main text color
- `--color-text-secondary`: Secondary/muted text
- `--color-border`: Border lines
- `--color-bg`: Background sections

### Adding Social Links

In the Contact section of `public/index.html`, add more social links:

```html
<p>
  <a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
</p>
```

## 🚢 Deployment

### Render.com

1. Connect your GitHub repository
2. Create a new Web Service
3. Set Environment Variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
4. Deploy!

### Railway.app

1. Connect your GitHub repository
2. Add environment variables in the project settings
3. Deploy!

### Other Hosting (Vercel, Heroku, etc.)

1. Ensure all environment variables are set
2. Use the `start` script from `package.json`
3. Deploy with your hosting provider's CLI or dashboard

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Environment**: dotenv

## 📄 License

MIT License - feel free to use this as a template for your portfolio!

---

**Need Help?**

- Check the `.env` file setup for email configuration
- Ensure `projects.json` is properly formatted JSON
- Test the contact form to verify email setup is working
- Use browser DevTools console to check for JavaScript errors
