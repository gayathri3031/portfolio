# Gayathri's Portfolio Website 🚀

A modern, responsive, and professional portfolio website built with React.js, featuring dynamic CSV data integration and a fully functional contact form with EmailJS.

https://gayathri3031.github.io/portfolio/

## ✨ Features

### 🎨 **Modern Design**
- **Kelly Template Inspired**: Professional gradient backgrounds and modern typography
- **Responsive Layout**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Smooth Animations**: Floating action buttons, hover effects, and transitions
- **Custom Logo**: Unique "G" logo with orbiting dots animation
- **Professional Color Scheme**: Violet and pink gradients with clean white sections

### 📊 **Dynamic Content Management**
- **CSV Data Integration**: All content loaded dynamically from CSV files
- **Easy Updates**: Modify portfolio content by editing CSV files
- **Real-time Loading**: Content fetches and displays automatically
- **Error Handling**: Graceful fallbacks for missing data

### 📧 **Interactive Contact System**
- **Working Contact Form**: Fully functional with EmailJS integration
- **Multiple Contact Options**: Phone, Email, and LinkedIn quick-access cards
- **Form Validation**: Real-time validation with user feedback
- **Toast Notifications**: Success/error messages with smooth animations
- **Mobile Optimized**: Touch-friendly form design for mobile users

### 🛠️ **Technical Excellence**
- **Component-Based Architecture**: Modular React components for maintainability
- **Mobile-First Design**: Responsive breakpoints for all screen sizes
- **Performance Optimized**: Efficient loading and rendering
- **SEO Ready**: Proper HTML structure and meta tags
- **Modern JavaScript**: ES6+ features and React hooks

## 🖥️ **Live Demo**

- **GitHub Pages**: [https://gayathri3031.github.io/portfolio/](https://gayathri3031.github.io/portfolio/)
- **Development**: `http://localhost:3000/portfolio`

## 🛠️ **Tech Stack**

### **Frontend**
- **React.js** (18.2.0) - Component-based UI library
- **React Icons** - Icon library for consistent iconography
- **Custom CSS** - Modern styling with flexbox and grid layouts
- **HTML5** - Semantic markup structure

### **Data & Communication**
- **PapaParse** - CSV parsing for dynamic content
- **EmailJS** - Client-side email functionality
- **Fetch API** - Data loading from CSV files

### **Development & Deployment**
- **Node.js** - Development environment
- **npm** - Package management
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation

## 📁 **Project Structure**

```
portfolio/
├── public/
│   ├── data/                    # CSV data files
│   │   ├── personal.csv         # Personal info & contact
│   │   ├── experience.csv       # Work experience
│   │   ├── skills.csv          # Technical skills
│   │   ├── education.csv       # Educational background
│   │   ├── projects.csv        # Project portfolio
│   │   ├── certifications.csv  # Certifications & courses
│   │   └── languages.csv       # Language proficiencies
│   ├── Gayathri_Resume.pdf     # Resume file
│   └── index.html              # Main HTML template
├── src/
│   ├── components/             # React components
│   │   ├── TopNavigation.js    # Navigation with mobile menu
│   │   ├── Hero.js            # Landing section
│   │   ├── Experience.js      # Work experience
│   │   ├── Skills.js          # Skills with progress bars
│   │   ├── Education.js       # Educational background
│   │   ├── Projects.js        # Project showcase
│   │   ├── Certifications.js  # Certifications display
│   │   ├── Languages.js       # Language skills
│   │   └── Contact.js         # Contact form & info
│   ├── utils/
│   │   └── csvReader.js       # CSV parsing utility
│   ├── App.js                 # Main application component
│   ├── index.js              # React DOM rendering
│   └── index.css             # Global styles
├── package.json              # Dependencies & scripts
└── README.md                 # Project documentation
```

## 📊 **Data Management**

### **CSV File Structure**
All portfolio content is stored in CSV files for easy maintenance:

| File | Purpose | Key Fields |
|------|---------|------------|
| `personal.csv` | Contact info | name, title, phone, email, linkedin, summary |
| `experience.csv` | Work history | company, position, duration, description |
| `skills.csv` | Technical skills | skill, level, category |
| `education.csv` | Academic background | institution, degree, year, score |
| `projects.csv` | Project portfolio | title, description, technologies, link |
| `certifications.csv` | Certifications | title, provider, year, score |
| `languages.csv` | Language skills | language, proficiency |

### **Easy Content Updates**
1. Edit the relevant CSV file in `public/data/`
2. Save the file
3. Refresh the website to see changes
4. No code changes required!

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn package manager
- Git for version control

### **Installation**
```bash
# Clone the repository
git clone https://github.com/gayathri3031/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Open browser to http://localhost:3000/portfolio
```

### **Development Commands**
```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Install new packages
npm install <package-name>
```

## 📧 **EmailJS Configuration**

The contact form uses EmailJS for client-side email functionality:

### **Current Setup**
- **Service ID**: `service_t6bnlqe`
- **Template ID**: `template_y3nzgwj`
- **Public Key**: `KRouJx2cIwEPl7DoF`

### **To Configure Your Own EmailJS**
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the IDs in `src/components/Contact.js`
5. Add your domain to EmailJS dashboard

## 🌐 **Deployment**

### **GitHub Pages (Current)**
```bash
# Build and deploy
npm run build
npm run deploy
```

### **Alternative Deployment Options**

#### **Netlify** (Recommended for easier setup)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on every push

#### **Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts

## 📱 **Mobile Optimization**

### **Responsive Features**
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Touch-Friendly**: Large buttons and proper spacing
- **Readable Typography**: Optimized font sizes for mobile
- **Form Optimization**: Full-width inputs and buttons on mobile
- **Performance**: Fast loading on mobile networks

### **Responsive Breakpoints**
- **Desktop**: > 768px (Full layout)
- **Tablet**: ≤ 768px (Adjusted spacing)
- **Mobile**: ≤ 480px (Compact layout)

## 🎨 **Customization Guide**

### **Colors & Styling**
- Primary gradient: `#667eea` to `#764ba2`
- Accent colors: Violet and pink gradients
- Typography: Poppins font family
- Modify in `src/index.css` and component styles

### **Content Updates**
1. **Personal Info**: Edit `public/data/personal.csv`
2. **Resume**: Replace `public/Gayathri_Resume.pdf`
3. **Projects**: Update `public/data/projects.csv`
4. **Skills**: Modify `public/data/skills.csv`

### **Advanced Customization**
- Add new sections by creating components in `src/components/`
- Modify navigation items in `src/components/TopNavigation.js`
- Update color schemes in CSS files
- Add new CSV data sources and corresponding components

## 🔧 **Troubleshooting**

### **Common Issues**
1. **CSV files not loading**: Check file paths in `src/utils/csvReader.js`
2. **EmailJS not working**: Verify service IDs and domain settings
3. **Mobile menu not showing**: Check CSS media queries
4. **Resume download failing**: Verify file path in `src/App.js`

### **Development Issues**
- Clear browser cache for CSS changes
- Check console for JavaScript errors
- Verify CSV file format (comma-separated)
- Ensure all dependencies are installed

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 **About the Developer**

**Gayathri** - Backend Java Developer with 2+ years of experience
- 📧 Email: gayathribalaa11@gmail.com
- 💼 LinkedIn: [Gayathri B](https://www.linkedin.com/in/gayathri-b-648849185/)

---

**Built with ❤️ using React.js and modern web technologies**

*⭐ If you found this portfolio template helpful, please give it a star!* 
