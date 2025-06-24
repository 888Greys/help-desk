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

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ticket-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

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