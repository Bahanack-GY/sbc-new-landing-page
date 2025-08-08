# SBC New Canal Project

A React-based web application for Sniper Business Center, featuring a modern hero section, animated components, and URL parameter validation.

## 📁 File Structure

```
newCanal/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # React components
│   ├── pages/
│   │   ├── Home.tsx        # Main homepage with hero section
│   │   └── Fake.tsx        # Fallback page for invalid URLs
│   ├── App.tsx             # Main app component with routing
│   ├── index.tsx           # Entry point
│   ├── index.css           # Global styles and animations
│   └── vite-env.d.ts       # Vite type definitions
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd newCanal
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📦 Key Dependencies

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **TypeScript** - Type safety

## 🎨 Features

### Home Page (`/src/pages/Home.tsx`)
- **Hero Section**: Modern design with animated background bubbles
- **Logo Slideshow**: Scrolling partner logos with smooth animation
- **Countries Section**: 29 French-speaking African countries with flags
- **Stats Section**: Animated member count with scroll-triggered animation
- **Social Media**: Vibrating Telegram link for attention
- **URL Validation**: Extracts and validates `affiliationCode` and `phoneNumber` parameters

### Fake Page (`/src/pages/Fake.tsx`)
- **Fallback Page**: Displays when URL parameters are invalid
- **WhatsApp Integration**: Direct contact button with pre-filled message
- **Consistent Design**: Matches main site's aesthetic

### Animations (`/src/index.css`)
- **Global Font**: Antonio font applied throughout
- **Custom Animations**: 
  - `animate-scroll` - Horizontal scrolling
  - `animate-float` - Floating bubbles
  - `animate-pulse-slow` - Slow pulsing effect

## 🔗 URL Structure

The application expects URLs in the format:
```
/:affiliationCode/:phoneNumber
```

Example:
```
http://localhost:5173/ABC123/+1234567890
```

## 🎯 Key Features

1. **Responsive Design**: Mobile-first approach with Tailwind CSS
2. **Smooth Animations**: Framer Motion for declarative animations
3. **URL Parameter Validation**: Security through backend validation
4. **Modern UI**: Clean, professional design with consistent branding
5. **Performance Optimized**: Efficient animations and lazy loading

## 🚨 Error Handling

- Invalid URL parameters redirect to `/fake` page
- Backend validation ensures security
- Graceful fallbacks for missing assets

## 🎨 Design System

### Colors
- Primary Blue: `#1862f0`
- Success Green: `#92b127`
- Warning Orange: `#f49101`

### Typography
- Font Family: Antonio (Google Fonts)
- Applied globally via CSS

### Animations
- Entry animations for sections
- Scroll-triggered animations
- Hover effects on interactive elements
- Continuous background animations

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Flexible layouts using Tailwind CSS
- Touch-friendly interactive elements
- Optimized animations for mobile devices

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Code Structure
- **Components**: Reusable UI components
- **Pages**: Route-level components
- **Styles**: Global CSS with Tailwind utilities
- **Animations**: Framer Motion variants and CSS keyframes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

[Add your license information here]

## 📞 Support

For support or questions, contact the development team or refer to the project documentation.
