# 🎨 Beket's Professional Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, glassmorphism design, and a dark blue professional theme.

## ✨ Features

- 🎯 **Modern Design** - Dark blue theme with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized Next.js with static export
- 🎬 **Smooth Animations** - Framer Motion animations throughout
- 📧 **Contact Form** - Integrated with Formspree & Telegram
- 🏆 **Achievement Showcase** - Bruh Ethiopia, Addiscoder, Udacity certs
- 📂 **Project Portfolio** - Showcase your best work
- 📄 **Document Downloads** - Resume and certificates

## 🛠️ Tech Stack

- **Frontend**: React, Next.js 14, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: React Icons
- **Forms**: Axios, Formspree, EmailJS
- **Deployment**: Netlify / Vercel

## 📋 Sections

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero** - Eye-catching introduction
3. **About** - Skills and background
4. **Achievements** - Awards and recognition
5. **Projects** - Showcase of your work
6. **Documents** - Resume and certificates
7. **Contact** - Contact form and social links
8. **Footer** - Quick links and social media

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bekabekiyeee-creator/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## ⚙️ Configuration

### 1. Update Personal Information

Edit these files with your details:

**`components/Hero.tsx`** - Update intro text and social links
**`components/About.tsx`** - Add your bio and skills
**`components/Projects.tsx`** - Update project details and GitHub links
**`components/Contact.tsx`** - Update email and contact info
**`components/Footer.tsx`** - Social media links

### 2. Setup Contact Form

#### Formspree (Email)
1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Copy your form ID
4. In `components/Contact.tsx`, replace `YOUR_FORMSPREE_ID` with your actual ID

```typescript
// Find this line and update:
await axios.post('https://formspree.io/f/YOUR_FORMSPREE_ID', {
```

#### Telegram Bot (Optional Notifications)
1. Open Telegram and search for `@BotFather`
2. Create a new bot and copy the token
3. Get your chat ID by messaging the bot and visiting `https://api.telegram.org/botYOUR_TOKEN/getUpdates`
4. Update in `components/Contact.tsx`:

```typescript
// Replace these:
chat_id: 'YOUR_TELEGRAM_CHAT_ID',
// and
botYOUR_TELEGRAM_BOT_TOKEN
```

### 3. Add Your Resume & Certificates

Create a `public` folder with:
```
public/
  ├── resume.pdf
  └── certs/
      ├── web-dev.pdf
      ├── ai-ml.pdf
      ├── android.pdf
      └── data-science.pdf
```

## 📦 Build & Deploy

### Local Build
```bash
npm run build
# or
yarn build
```

### Deploy to Netlify (Recommended)

**Option 1: Git Integration (Easiest)**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy"

**Option 2: Manual Upload**
```bash
npm run build
# Upload the 'out' folder to Netlify
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Next.js settings
4. Click "Deploy"

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Adjust these hex values
    500: '#5b81ff',
    600: '#4361ff',
    700: '#3647d8',
  }
}
```

### Animations
Modify `styles/globals.css` to adjust animation speeds and effects

### Typography
Update font settings in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📁 Project Structure

```
portfolio/
├── pages/
│   ├── _app.tsx          # Next.js app wrapper
│   ├── _document.tsx     # HTML document setup
│   └── index.tsx         # Main page
├── components/
│   ├── Navbar.tsx        # Navigation
│   ├── Hero.tsx          # Intro section
│   ├── About.tsx         # About section
│   ├── Achievements.tsx  # Achievements
│   ├── Projects.tsx      # Projects showcase
│   ├── Documents.tsx     # Certificates
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── styles/
│   └── globals.css       # Global styles
├── public/
│   ├── resume.pdf        # Your resume
│   └── certs/            # Your certificates
└── config files
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── next.config.js
    └── package.json
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linting
npm run export   # Export static site
```

## 📸 Screenshots

Your portfolio includes:
- ✅ Hero section with call-to-action
- ✅ About with skills grid
- ✅ Achievements with stats
- ✅ Projects showcase
- ✅ Downloadable certificates
- ✅ Functional contact form
- ✅ Responsive mobile design

## 🌐 Environment Variables

Create a `.env.local` file (if needed):

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id
```

Then import in components:
```typescript
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
```

## 🚨 Troubleshooting

**Issue: Form not sending**
- Check Formspree ID is correct
- Make sure email is verified in Formspree
- Check browser console for errors

**Issue: Styles not applying**
- Run `npm run build` and restart dev server
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

**Issue: Images not showing**
- Add images to `public` folder
- Update image paths in components

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📧 Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Email: bekiakundi5@gmail.com

## 🎯 Next Steps After Deployment

1. ✅ Deploy to Netlify/Vercel
2. ✅ Test all links and forms
3. ✅ Submit to scholarship websites
4. ✅ Share on social media
5. ✅ Keep projects updated

---

**Built with ❤️ by Beket Mitiku Amenu**

⭐ If this helped, please star the repo!
