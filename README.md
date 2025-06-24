# IT Support Ticket System

A modern, professional IT support ticket submission system built with React, Vite, and TailwindCSS.

## 🚀 Features

- **Professional Landing Page** with modern design and animations
- **Comprehensive Ticket Form** with organized sections
- **Real-time Form Validation** with visual feedback
- **Responsive Design** optimized for desktop and mobile
- **Modern UI Components** with smooth animations and transitions
- **Webhook Integration** for ticket submission
- **Component-based Architecture** for easy maintenance

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

## 📋 Form Fields

The ticket submission form includes:

- **Contact Information**
  - Email address (with validation)
  - Floor and office location

- **Issue Details**
  - Issue title
  - Detailed description

- **Classification**
  - Category: Hardware, Software, Network
  - Priority: Urgent, High, Medium, Low

## 🎨 Design Features

- **Glass morphism effects** with backdrop blur
- **Gradient backgrounds** and modern color schemes
- **Interactive radio buttons** with custom styling
- **Loading states** and success/error feedback
- **Professional typography** and spacing
- **Smooth animations** and hover effects

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed on your machine:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** - [Yarn installation](https://yarnpkg.com/getting-started/install)
- **Git** - [Download here](https://git-scm.com/downloads)

### Quick Start Guide

#### Option 1: Automated Setup (Recommended for beginners)

**For Mac/Linux users:**
```bash
git clone https://github.com/YOUR_USERNAME/it-support-ticket-system.git
cd it-support-ticket-system
./quick-start.sh
```

**For Windows users:**
```bash
git clone https://github.com/YOUR_USERNAME/it-support-ticket-system.git
cd it-support-ticket-system
quick-start.bat
```

#### Option 2: Manual Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/it-support-ticket-system.git
   cd it-support-ticket-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *This will install all required packages including React, Vite, TailwindCSS, and Axios*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - You should see the IT Support Portal landing page

#### 📖 Need More Help?

- **New to web development?** Check out [SETUP.md](SETUP.md) for detailed step-by-step instructions
- **Experienced developer?** The quick start above should be sufficient

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory and ready for deployment.

### Troubleshooting

**Port already in use?**
- Vite will automatically try the next available port (5174, 5175, etc.)
- Or specify a custom port: `npm run dev -- --port 3000`

**Dependencies not installing?**
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Build errors?**
- Make sure you're using Node.js version 16 or higher: `node --version`
- Update npm to latest version: `npm install -g npm@latest`

## 🔧 Configuration

### Webhook URL

The form submits to a webhook URL. To change the endpoint, update the URL in:
```javascript
// src/components/TicketForm.jsx
const response = await axios.post('YOUR_WEBHOOK_URL', formData)
```

## 📁 Project Structure

```
ticket-form/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx    # Landing page component
│   │   └── TicketForm.jsx     # Ticket submission form
│   ├── App.jsx                # Main app component
│   ├── index.css              # TailwindCSS imports
│   └── main.jsx               # App entry point
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🎯 Future Enhancements

- [ ] User authentication system
- [ ] Ticket tracking and status updates
- [ ] Admin dashboard for ticket management
- [ ] Email notifications
- [ ] File upload functionality
- [ ] Dark mode support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions, please contact:
- Email: support@company.com
- Phone: (123) 456-7890

---

Built with ❤️ using React, Vite, and TailwindCSS