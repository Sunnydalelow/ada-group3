# ADA Help Center Prototype

## Purpose
A clickable HTML prototype demonstrating the American Diabetes Association's unified help center experience at help.diabetes.org. This prototype showcases a "single pane of glass" approach serving patients, donors, and volunteers with personalized content and an AI agent interface.

## Tech Stack
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8 (instant dev server, fast builds)
- **Styling**: Tailwind CSS 4 with custom ADA brand colors
- **Animations**: GSAP 3 (ready to implement)
- **State Management**: Zustand (auth state, user preferences)
- **Routing**: React Router 7
- **Backend**: Express 5 (static file serving for production)
- **Deployment**: Heroku-ready with Procfile

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── common/          # Header, Footer, SearchBar, ChatWidget, AudienceSelector
│   │   ├── home/            # Hero, QuickActions, PopularTopics, PersonalizedFeed
│   │   ├── auth/            # LoginModal, ProfileMenu
│   │   └── dashboard/       # PatientDashboard, DonorDashboard, VolunteerDashboard
│   ├── pages/               # Home, Resources, Support, Dashboard, SearchResults
│   ├── store/               # authStore.ts (Zustand)
│   ├── data/                # mockResources.ts, mockFAQs.ts, mockUsers.ts
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind + custom styles
├── public/                  # Static assets (logo, images)
├── server.js                # Express production server
├── vite.config.ts           # Vite configuration with path aliases
├── tailwind.config.js       # ADA brand colors and theme
└── package.json             # Dependencies and scripts
```

## Key Features

### 1. **Unauthenticated Experience**
- Hero section with search
- Audience selector (Patient / Donor / Volunteer)
- Quick action cards based on selected audience
- Popular topics grid
- Persistent chat widget

### 2. **Authenticated Experience**
- Personalized greeting and dashboard preview
- Role-specific dashboards with relevant widgets
- Saved resources and activity tracking
- Tailored recommendations

### 3. **AI Chat Widget**
- Fixed bottom-right corner on all pages
- Collapsible/expandable interface
- Mock conversation flow
- Data collection transparency message

### 4. **Three User Types**
- **Patient**: Health tracking, resources, A1C logs
- **Donor**: Donation history, impact metrics, giving options
- **Volunteer**: Event calendar, hours logged, opportunities

## Demo Accounts

Use these credentials to test different user experiences:

- **Patient**: `patient@demo.com` / `demo123`
- **Donor**: `donor@demo.com` / `demo123`
- **Volunteer**: `volunteer@demo.com` / `demo123`

## Key Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start production server
npm start
```

## Design System

### Colors
- **Primary Red**: `#CC092F` (ADA brand color)
- **Secondary Blue**: `#0176D3` (links, accents)
- **Navy**: `#032D60` (headers, dark text)
- **Light**: `#F4F7FB` (backgrounds, cards)
- **Gray**: `#6B7280` (secondary text)
- **Border**: `#DDE3EE` (dividers)

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizing**: Tailwind's default scale
- **Line height**: 1.6 for body text

### Components
- **Border radius**: 8px (buttons), 12px (cards)
- **Shadows**: sm (cards), lg (modals)
- **Transitions**: 200ms ease

## Data Collection Points

The prototype demonstrates data collection at:
1. Audience selection (user type preference)
2. Search queries
3. Chat interactions
4. Resource views and clicks
5. "Was this helpful?" feedback
6. Support form submissions
7. Dashboard activity patterns

Visual indicators show "This helps us personalize your experience" to build trust.

## Development Notes

### Path Aliases
Vite is configured with these path aliases:
- `@/` → `./src/`
- `@components/` → `./src/components/`
- `@pages/` → `./src/pages/`
- `@data/` → `./src/data/`
- `@store/` → `./src/store/`

### Mock Data
- **20 resources** covering various topics for patients, donors, volunteers
- **15 FAQs** with answers across different categories
- **3 demo users** with distinct profiles
- **Mock conversation flows** for chat widget

### State Persistence
Auth state persists in localStorage via Zustand middleware, so users stay logged in across page refreshes.

## Deployment

### Heroku
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create Heroku app
heroku create ada-help-prototype

# Deploy
git push heroku main

# Open in browser
heroku open
```

The `Procfile` is already configured to run the Express server.

## Testing Scenarios

1. **Unauth Flow**: Visit home → Select audience → Browse resources → Try chat
2. **Patient Auth**: Login → View personalized dashboard → Track health metrics
3. **Donor Auth**: Login → See donation history → View impact report
4. **Volunteer Auth**: Login → Check upcoming events → Browse opportunities
5. **Search**: Try various queries → See filtered results
6. **Support**: Read FAQs → Fill contact form
7. **Responsive**: Test on mobile (375px), tablet (768px), desktop (1280px+)

## Next Steps for Production

To evolve this prototype into a production application:

1. **Backend Integration**: Connect to ADA's CMS/API for real content
2. **Real Authentication**: Implement SSO/OAuth with ADA accounts
3. **AI Agent**: Integrate Claude or GPT for actual chat functionality
4. **Analytics**: Add Google Analytics or Segment tracking
5. **Search**: Implement Algolia or Elasticsearch
6. **Database**: Store user preferences, bookmarks, activity
7. **Content Management**: Admin interface for content updates
8. **Accessibility**: Full WCAG 2.1 AA compliance audit
9. **Performance**: Image optimization, code splitting, CDN

## Recent Work

- ✅ Complete project scaffolding with Vite + React + TypeScript
- ✅ Auth system with Zustand (3 demo accounts)
- ✅ All major pages (Home, Resources, Support, Dashboard, Search)
- ✅ Role-specific dashboards (Patient, Donor, Volunteer)
- ✅ Responsive header with search and auth
- ✅ Chat widget with mock conversations
- ✅ Mock data (resources, FAQs, users)
- ✅ Tailwind styling with ADA brand colors
- ✅ Production-ready Express server
- ✅ Heroku deployment configuration

## Known Limitations (Prototype Phase)

- No real backend (all data is mocked)
- Chat responses are simulated
- Authentication is demo-only (no password hashing)
- No actual data persistence beyond localStorage
- Images are placeholders
- GSAP animations not yet implemented (structure ready)
- No accessibility testing completed yet

## Contact

For questions about this prototype, contact the ADA development team or reference the project plan at:
`~/.claude/plans/ok-i-want-to-reflective-wigderson.md`
