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



### 3. Customize Design (Optional)

All colors, fonts, and spacing are defined as CSS variables in `public/styles.css`:

```css
:root {
  --color-accent: #2563eb;        /* Primary blue - change this to your preferred color */
  --color-text: #0f0f0f;          /* Near-black text */
  --font-family: 'Inter', ...     /* Font from Google Fonts */
}
```

Adjust these values to match your brand.

### 4. Run the Server

```bash
npm start
```

The server will start at `http://localhost:3000`

Visit the URL in your browser and test all functionality:
- Check responsive design on mobile
- Test the contact form
- Verify all buttons and links work





## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Environment**: dotenv

## 📄 License

MIT License - feel free to use this as a template for your portfolio!


