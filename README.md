# Indore Gujrat Carrier (IGC) - Official Logistics Website

Modern, accessible, mobile-first static website for **Indore Gujrat Carrier (IGC)** — Fleet Owners and Transport Contractors connecting Madhya Pradesh and Gujarat with daily dedicated transport, Full Truckload (FTL), Parcel, and Door-to-Door logistics.

---

## 🚀 Key Features

1. **Target-Audience Focused UI**:
   - Designed specifically for shopkeepers, traders, drivers, brokers, and godown dispatch staff.
   - Clean, high-contrast visual cards with minimal cognitive load.
   - **Bilingual Support (English & हिन्दी)**: 1-click instant language switch with persistent preference.

2. **1-Tap Direct WhatsApp & Call Integration**:
   - **Quick Rate Inquiry Form**: Generates a pre-filled WhatsApp message with origin, destination, material type, and contact details, opening directly in WhatsApp.
   - **Bilty / LR Status Search**: Allows users to enter their consignment number and instantly inquire with the dispatch godown desk.
   - **Sticky Mobile Contact Bar**: Persistent `[ Call Now ]` and `[ WhatsApp ]` buttons at the bottom of the screen on mobile devices.

3. **Core Services**:
   - Full Truck Load (FTL) — 14ft to 32ft containers & open trucks
   - Parcel & Part Load Services
   - Door-to-Door Pickup & Delivery
   - Time-Bound Express (12–18 hours turnaround)

4. **Strategic Hubs & Godowns**:
   - **Indore Central Hub**: Godown No. 23, Roshan Compound, A.B. Road, Dewas Naka, Indore – 452 010 (M.P.)
   - **Ahmedabad Regional Hub**: Godown No. 202, Transport Nagar, Aslali, Ahmedabad (Gujarat)
   - Direct click-to-dial numbers and Google Maps navigation links for both locations.

5. **Client Credibility Showcase**:
   - Features real client logos: Exide Batteries, Eveready, Amara Raja (Amaron), Almonard, Lincoln Pharmaceuticals, Sumitomo Chemical, Nichino, and more.

---

## 📁 Project Structure

```
igc_indore/
├── index.html              # Main webpage with semantic HTML5 structure & SEO tags
├── assets/
│   ├── css/
│   │   └── style.css       # Clean Vanilla CSS with responsive design & mobile-first styling
│   ├── js/
│   │   └── main.js         # Language switcher, WhatsApp quote builder & interactivity
│   └── images/
│       ├── logo.png        # Official IGC brand logo
│       ├── hero-trucks.jpg # High-resolution highway freight banner
│       ├── warehouse-cargo.jpg # Operations & cargo warehouse visual
│       └── clients/        # Client logos (Exide, Eveready, Amaron, etc.)
└── README.md
```

---

## 💻 How to Run Locally

You can run this project with any local HTTP server:

```bash
# Using Python 3
python3 -m http.server 3000

# Or using Node.js / npx serve
npx serve .
```

Open `http://localhost:3000` in your web browser.

---

## 🌐 Deployment Options

This website is **100% static** and requires no build step:
- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages under Repository Settings.
- **Netlify / Vercel**: Drag and drop the folder into Netlify/Vercel for immediate HTTPS hosting.
- **Firebase Hosting**: Use `firebase deploy` with public directory set to `.`.
- **cPanel / Apache / Nginx**: Upload files directly to `public_html`.
