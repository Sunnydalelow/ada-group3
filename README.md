# 🏥 ADA Help Center Prototype

A full-featured clickable prototype demonstrating the American Diabetes Association's unified help experience at **help.diabetes.org**.

![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Features

### ✨ Dual Experience
- **Unauthenticated**: Audience selector, popular topics, general help
- **Authenticated**: Personalized dashboards, saved resources, tailored content

### 👥 Three User Types
- **Patients**: Health tracking, blood sugar logs, treatment resources
- **Donors**: Donation history, impact metrics, giving opportunities
- **Volunteers**: Event calendar, hours logged, community impact

### 💬 AI Chat Widget
- Fixed bottom-right corner on all pages
- Mock conversation flows
- Context-aware responses
- Data collection transparency

### 🔍 Smart Search
- Filter resources by category and audience
- AI-suggested related queries
- Empty state handling with chat prompt

## 🔑 Demo Accounts

Test the different user experiences:

| Email | Password | Role |
|-------|----------|------|
| `patient@demo.com` | `demo123` | Patient |
| `donor@demo.com` | `demo123` | Donor |
| `volunteer@demo.com` | `demo123` | Volunteer |

## 📱 Pages

- **Home** (`/`) - Hero, audience selector, quick actions, popular topics
- **Resources** (`/resources`) - Filterable library of articles and guides
- **Support** (`/support`) - FAQs, contact form, support options
- **Dashboard** (`/dashboard`) - Role-specific personalized hub
- **Search** (`/search`) - Filtered results with AI suggestions

## 🎨 Design System

### Colors (ADA Brand)
- **Primary Red**: `#CC092F`
- **Secondary Blue**: `#0176D3`
- **Navy**: `#032D60`
- **Light**: `#F4F7FB`
- **Gray**: `#6B7280`

### Typography
- Font: Inter (Google Fonts)
- Responsive scaling via Tailwind

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build**: Vite 8
- **Styling**: Tailwind CSS 4
- **State**: Zustand (auth, preferences)
- **Routing**: React Router 7
- **Animations**: GSAP 3 (structure ready)
- **Backend**: Express 5
- **Deployment**: Heroku-ready

## 📂 Project Structure

```
src/
├── components/
│   ├── common/      # Header, Footer, SearchBar, ChatWidget
│   ├── home/        # Hero, QuickActions, PopularTopics
│   ├── auth/        # LoginModal, ProfileMenu
│   └── dashboard/   # Patient, Donor, Volunteer dashboards
├── pages/           # Main page components
├── store/           # Zustand state management
└── data/            # Mock resources, FAQs, users
```

## 🚢 Deployment

### Heroku

```bash
# Create Heroku app
heroku create ada-help-prototype

# Deploy
git push heroku main

# Open in browser
heroku open
```

### Vercel / Netlify

The app is configured for static deployment. Just connect your repo and deploy!

## 📊 Data Collection Points

The prototype demonstrates tracking at:
- Audience selection
- Search queries
- Chat interactions  
- Resource views
- Feedback buttons
- Form submissions
- Dashboard activity

All with transparent "This helps us personalize..." messaging.

## 🧪 Testing Checklist

- [ ] Unauthenticated flow: Home → Select audience → Browse resources
- [ ] Patient login: Track metrics, view personalized content
- [ ] Donor login: See donation history and impact
- [ ] Volunteer login: Check events and opportunities
- [ ] Search: Try various queries, verify results
- [ ] Support: Browse FAQs, submit contact form
- [ ] Chat widget: Test conversation flow
- [ ] Responsive: Mobile (375px), Tablet (768px), Desktop (1280px+)

## 📝 Next Steps for Production

To evolve into a production app:

1. **Backend**: Connect to ADA's CMS/API
2. **Authentication**: Implement SSO/OAuth
3. **AI Agent**: Integrate Claude or GPT
4. **Analytics**: Add tracking (GA, Segment)
5. **Search**: Implement Algolia/Elasticsearch
6. **Database**: User preferences and activity
7. **Accessibility**: WCAG 2.1 AA compliance
8. **Performance**: Image optimization, CDN

## 📖 Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed technical documentation.

## 🤝 Contributing

This is a prototype for demonstration purposes. For questions or feedback, contact the ADA development team.

---

**Built with ❤️ for the American Diabetes Association**
