# Gayathri B - Dynamic Portfolio

A modern, responsive React.js portfolio website that dynamically loads content from CSV files. This portfolio showcases professional experience, skills, education, projects, and certifications in an interactive and visually appealing format.

## ✨ Features

- **Dynamic Data Loading**: All content is loaded from CSV files for easy updates
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Modern UI**: Glass-morphism design with smooth animations and hover effects
- **Clickable Elements**: Interactive contact information, skill filters, and project cards
- **Professional Sections**:
  - Personal Information & Contact
  - Professional Experience
  - Technical Skills with filtering
  - Education Background
  - Project Portfolio
  - Certifications & Courses
  - Language Proficiency

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── data/              # CSV data files
│   │   ├── personal.csv
│   │   ├── experience.csv
│   │   ├── skills.csv
│   │   ├── education.csv
│   │   ├── projects.csv
│   │   ├── certifications.csv
│   │   ├── languages.csv
│   │   └── achievements.csv
│   └── index.html
├── src/
│   ├── components/        # React components
│   │   ├── Header.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   ├── Projects.js
│   │   ├── Certifications.js
│   │   ├── Languages.js
│   │   └── Navigation.js
│   ├── utils/
│   │   └── csvReader.js   # CSV parsing utility
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## 🔧 Customization

### Updating Content

All content is stored in CSV files in the `public/data/` directory. To update the portfolio:

1. **Personal Information**: Edit `public/data/personal.csv`
2. **Experience**: Edit `public/data/experience.csv`
3. **Skills**: Edit `public/data/skills.csv`
4. **Education**: Edit `public/data/education.csv`
5. **Projects**: Edit `public/data/projects.csv`
6. **Certifications**: Edit `public/data/certifications.csv`
7. **Languages**: Edit `public/data/languages.csv`

### CSV File Formats

Each CSV file has a specific structure. Here are examples:

#### personal.csv
```csv
field,value
name,Your Name
title,Your Title
phone,+1234567890
email,your.email@example.com
```

#### skills.csv
```csv
category,skill,level
Programming,JavaScript,Expert
Framework,React,Advanced
```

#### projects.csv
```csv
title,technologies,description,type,status
Project Name,"Tech1, Tech2","Project description",Personal Project,Completed
```

### Styling

- Main styles are in `src/index.css`
- Each component has inline styles for specific customizations
- Color scheme can be modified by updating CSS custom properties

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **PapaParse**: CSV parsing library
- **React Icons**: Icon library
- **CSS3**: Styling with modern features like backdrop-filter
- **Responsive Design**: Mobile-first approach

## 📱 Mobile Responsive

The portfolio is fully responsive with:
- Mobile-friendly navigation menu
- Optimized layouts for tablets and phones
- Touch-friendly interactive elements
- Readable typography on all screen sizes

## 🎨 Design Features

- **Glass-morphism**: Modern translucent design elements
- **Smooth Animations**: Hover effects and transitions
- **Color-coded Elements**: Skills and certifications by type/level
- **Interactive Cards**: Clickable project and experience cards
- **Gradient Backgrounds**: Modern visual appeal

## 📞 Contact Integration

Contact information is clickable:
- Phone numbers open the dialer
- Email addresses open the mail client
- LinkedIn opens in a new tab

## 🔄 Future Enhancements

Potential improvements:
- Dark/Light theme toggle
- PDF download functionality
- Contact form integration
- Blog section
- Testimonials section
- Achievement galleries

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React.js and modern web technologies. 