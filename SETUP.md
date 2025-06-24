# 🚀 Complete Setup Guide for New Users

This guide will help you get the IT Support Ticket System running on your machine, even if you're new to web development.

## 📋 What You'll Need

Before we start, you'll need to install a few tools on your computer. Don't worry - this is a one-time setup!

### Step 1: Install Node.js

Node.js is required to run this React application.

1. **Go to** [nodejs.org](https://nodejs.org/)
2. **Download** the LTS (Long Term Support) version for your operating system
3. **Run the installer** and follow the setup wizard
4. **Verify installation** by opening your terminal/command prompt and typing:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both commands.

### Step 2: Install Git

Git is needed to download the project from GitHub.

1. **Go to** [git-scm.com](https://git-scm.com/downloads)
2. **Download** Git for your operating system
3. **Install** following the default settings
4. **Verify installation** by typing in terminal:
   ```bash
   git --version
   ```

### Step 3: Choose a Code Editor (Optional but Recommended)

While not required to run the project, a code editor will help if you want to explore or modify the code:

- **VS Code** (Recommended): [code.visualstudio.com](https://code.visualstudio.com/)
- **Sublime Text**: [sublimetext.com](https://www.sublimetext.com/)
- **Atom**: [atom.io](https://atom.io/)

## 💻 Running the Project

### Step 1: Download the Project

1. **Open your terminal/command prompt**
   - **Windows**: Press `Win + R`, type `cmd`, press Enter
   - **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
   - **Linux**: Press `Ctrl + Alt + T`

2. **Navigate to where you want to save the project**
   ```bash
   # Example: Go to Desktop
   cd Desktop
   
   # Or create a new folder for projects
   mkdir my-projects
   cd my-projects
   ```

3. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/it-support-ticket-system.git
   ```
   *Replace YOUR_USERNAME with the actual GitHub username*

4. **Enter the project folder**
   ```bash
   cd it-support-ticket-system
   ```

### Step 2: Install Project Dependencies

This step downloads all the libraries and tools the project needs:

```bash
npm install
```

**What's happening?** This command reads the `package.json` file and downloads all required packages (React, TailwindCSS, etc.) into a `node_modules` folder.

**This might take a few minutes** depending on your internet connection.

### Step 3: Start the Development Server

```bash
npm run dev
```

**You should see output like:**
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 4: View the Application

1. **Open your web browser**
2. **Go to** `http://localhost:5173`
3. **You should see** the IT Support Portal landing page!

## 🎉 Success! What Now?

### Exploring the Application

- **Landing Page**: Professional welcome screen with feature highlights
- **Submit Ticket**: Click "Create Support Ticket" to see the form
- **Form Features**: Try filling out the form to see validation and interactions

### Making Changes (Optional)

If you want to modify the application:

1. **Open the project** in your code editor
2. **Key files to explore:**
   - `src/components/LandingPage.jsx` - The welcome screen
   - `src/components/TicketForm.jsx` - The ticket submission form
   - `src/App.jsx` - Main application logic
3. **Save any changes** and the browser will automatically refresh!

### Stopping the Server

When you're done:
- **Press** `Ctrl + C` in the terminal to stop the development server

## 🔧 Customization Options

### Change the Webhook URL

To connect the form to your own backend:

1. **Open** `src/components/TicketForm.jsx`
2. **Find line ~31** with the axios.post URL
3. **Replace** the URL with your webhook endpoint:
   ```javascript
   const response = await axios.post('YOUR_WEBHOOK_URL_HERE', formData)
   ```

### Modify Styling

The project uses TailwindCSS for styling:
- **Colors**: Search for `blue-` or `indigo-` classes to change the color scheme
- **Spacing**: Look for `p-`, `m-`, `space-` classes
- **Layout**: Find `grid`, `flex`, `w-`, `h-` classes

## 🆘 Common Issues & Solutions

### Issue: "npm: command not found"
**Solution**: Node.js isn't installed properly. Reinstall Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "git: command not found"
**Solution**: Git isn't installed. Download from [git-scm.com](https://git-scm.com/)

### Issue: Port 5173 is already in use
**Solution**: Vite will automatically use the next available port (5174, 5175, etc.)

### Issue: Permission errors on Mac/Linux
**Solution**: You might need to use `sudo` before npm commands, or fix npm permissions:
```bash
sudo npm install
```

### Issue: Dependencies won't install
**Solutions**:
1. **Clear npm cache**: `npm cache clean --force`
2. **Delete node_modules**: Remove the folder and run `npm install` again
3. **Update npm**: `npm install -g npm@latest`

### Issue: Browser shows blank page
**Solutions**:
1. **Check the terminal** for error messages
2. **Try a different browser**
3. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)

## 📞 Getting Help

If you run into issues:

1. **Check the terminal** for error messages
2. **Google the error message** - most issues have been solved before
3. **Check GitHub Issues** on the repository
4. **Ask for help** by creating a new GitHub issue

## 🎯 Next Steps

Once you have it running:

- **Explore the code** to understand how it works
- **Try making small changes** to see how they affect the app
- **Read about React, Vite, and TailwindCSS** to learn more
- **Consider contributing** improvements back to the project

---

**Congratulations!** 🎉 You now have a professional IT support ticket system running on your machine!