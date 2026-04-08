# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Email (Skip if Testing Locally)
Edit `.env` file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

**For Gmail**: [Get your App Password](https://myaccount.google.com/apppasswords)
- Enable 2FA first
- Select "Mail" and "Windows Computer"
- Copy the generated 16-char password into `.env`

### Step 3: Personalize Your Portfolio
Edit `public/index.html`:
- Change "John Doe" to your name
- Update the about section
- Add your email and social links

Edit `data/projects.json`:
- Replace sample projects with your actual work
- Keep the JSON format intact

### Step 4: Add Your Resume
- Put your resume PDF in `public/resume.pdf`
- The download button will work automatically

### Step 5: Run & Test
```bash
npm start
```

Visit `http://localhost:3000` in your browser. ✅

## ✨ What's Included

✅ Single-page portfolio with smooth scrolling  
✅ Clean, minimal design (no gradients or overdone effects)  
✅ Fully responsive (mobile + desktop)  
✅ Dynamic project loading from JSON  
✅ Contact form with email delivery  
✅ Smooth scroll-reveal animations  
✅ Mobile hamburger menu  
✅ CSS variables for easy theming  
✅ Zero external dependencies (vanilla JS)  

## 🎨 Design Highlights

- **Colors**: White background, near-black text, blue accents
- **Font**: Inter from Google Fonts
- **Layout**: Grid-based, generous whitespace
- **Animation**: Subtle fade-in effects only
- **Mobile**: Fully responsive from 320px+

## 📱 Mobile Menu

- Hamburger menu appears on screens < 768px
- Closes automatically when clicking nav links
- Smooth animation transitions

## 🔗 Project Card Features

Each project shows:
- Title & description
- Technology stack as tags
- Live Demo & View Code buttons
- Subtle top border accent

## 📧 Contact Form

- Real-time validation
- Loading spinner when sending
- Success/error messages
- Sends via Nodemailer to your email
- Reply-to address captured from form

## 🎨 Customize Colors

Edit `public/styles.css` to change the primary color:

```css
:root {
  --color-accent: #2563eb;  /* Change this to your color */
}
```

Other customizable variables:
- `--color-text`: Main text
- `--color-bg`: Background sections
- `--color-border`: Dividers

## 🚢 Ready to Deploy?

### Render.com
1. Push to GitHub
2. Select "New Web Service" on Render.com
3. Connect your repo
4. Add environment variables
5. Deploy!

### Railway
1. Connect GitHub repo
2. Add environment variables
3. Deploy!

## 📂 File Structure

```
portfolio/
├── public/
│   ├── index.html         ← Your website HTML
│   ├── styles.css         ← All styling
│   ├── script.js          ← JavaScript logic
│   └── resume.pdf         ← Upload your resume here
├── data/
│   └── projects.json      ← Edit with your projects
├── server.js              ← Express backend
├── package.json           ← Dependencies
├── .env                   ← Email config (keep secret!)
└── README.md              ← Full documentation
```

## 🐛 Troubleshooting

**"Module not found" error?**
```bash
npm install
```

**Email not sending?**
- Check `.env` has correct EMAIL_USER and EMAIL_PASS
- Verify Gmail app password (not your regular password)
- Enable 2FA on Gmail first

**Contact form not submitting?**
- Check browser console for errors (F12)
- Verify all form fields are filled
- Check network tab to see API response

**Styling looks weird?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `styles.css` is loading (DevTools > Network)

## 💡 Pro Tips

1. **Test locally first** before deploying
2. **Keep projects.json valid JSON** - use a JSON validator if unsure
3. **Update resume.pdf** - make sure it's in `public/` folder
4. **Check responsive design** - test on actual mobile device
5. **Use HTTPS** when deploying (most hosts do this automatically)

---

Happy coding! 🚀
