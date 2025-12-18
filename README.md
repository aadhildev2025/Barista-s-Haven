# ☕ Barista's Haven - Coffee Shop Website

A premium, fully responsive coffee shop website built with **React**, **Vite**, and **Tailwind CSS**. Designed with a "Dark Luxury" aesthetic, it features smooth animations, a parallax hero section, and direct WhatsApp ordering functionality.

## ✨ Features

- **Dark Luxury Design**: Deep charcoal backgrounds with elegant gold accents (`#d4a373`) and serif typography.
- **Responsive Navigation**: Glassmorphism navbar with mobile hamburger menu.
- **Parallax Hero Section**: Cinematic background effects with animated entrance.
- **Interactive Menu**:
  - Hover effects on cards (zoom, lift, glow).
  - **WhatsApp Ordering**: "Order Now" buttons pre-fill a WhatsApp message with the specific item and price.
- **Services & Gallery**: Modern grid layouts showcasing services and atmosphere.
- **Contact Form**: Integrated WhatsApp message generation for custom orders.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS, Custom CSS (Animations, Scrollbar)
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Playfair Display, Outfit, Great Vibes)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js installed (v16 or higher recommended).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/baristas-haven.git
    cd baristas-haven
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Visit `http://localhost:5173` (or the URL shown in your terminal).

## 📁 Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # React components (Hero, Menu, Contact, etc.)
├── index.css       # Global styles & Tailwind directives
├── App.jsx         # Main application component
└── main.jsx        # Entry point
```

## ⚙️ Customization

### Changing the Phone Number
To update the WhatsApp receiving number:
1.  Open `src/components/Menu.jsx` and `src/components/Contact.jsx`.
2.  Update the `phoneNumber` variable:
    ```javascript
    const phoneNumber = '+94714304378'; // Your number here
    ```

### Colors & Theme
The theme is configured in `tailwind.config.js` under the `coffee` color palette.

## 📦 Deployment

This project is optimized for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

**Build for production**:
```bash
npm run build
```
This will create a `dist` folder ready for hosting.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ for coffee lovers.*
