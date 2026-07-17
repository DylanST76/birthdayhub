# 🎂 BirthdayHub

> **The world's best birthday calendar app** — Premium, AI-powered, production-ready.

![BirthdayHub Banner](https://via.placeholder.com/1200x400/667eea/ffffff?text=🎂+BirthdayHub+-+The+World%27s+Best+Birthday+Calendar)

## ✨ Features

- 📅 **Multi-view Calendar** — Day, Week, Month, Year & List views
- 👤 **People Management** — Photos, social links, tags, notes
- ⏳ **Countdown Timers** — Real-time birthday countdowns
- 🔔 **Smart Reminders** — 60, 30, 15, 7, 3, 1 days + custom
- 🎁 **Gift History** — Photos, cost, store, rating, notes
- 🛍️ **Wishlists** — Per-person wishlists
- 🎨 **Taste Profiles** — Colors, food, music, movies, hobbies, sizes, allergies
- 🤖 **AI Features** — Gift suggestions, duplicate detection, personalized messages
- 📸 **Memory Timeline** — Photos, videos, notes
- 📊 **Dashboard** — Statistics, charts, filters
- 🔍 **Smart Search** — Full-text search + tags
- 📤 **Import/Export** — CSV, Excel, JSON, ICS, Google Calendar
- 🌙 **Dark/Light Mode** — Beautiful pastel design
- 🔐 **Authentication** — JWT + refresh tokens
- ♿ **Accessibility** — WCAG compliant

## 🛠️ Tech Stack

### Frontend
- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** + custom design system
- **Zustand** (state management)
- **React Query** (server state)
- **React Router v6** (routing)
- **Framer Motion** (animations)
- **FullCalendar** (calendar views)
- **Recharts** (dashboard charts)
- **React Hook Form** + Zod (forms & validation)

### Backend
- **Node.js** + **Express** + TypeScript
- **PostgreSQL** (primary database)
- **Prisma ORM** (type-safe DB access)
- **Redis** (caching + sessions)
- **JWT** authentication
- **OpenAI API** (AI features)
- **Nodemailer** (email reminders)
- **Multer** + **Cloudinary** (file uploads)
- **node-cron** (scheduled reminders)

### DevOps
- **Docker** + **Docker Compose**
- **GitHub Actions** (CI/CD)
- **Nginx** (reverse proxy)
- **PM2** (process manager)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose (optional)

### 1. Clone the repository
```bash
git clone https://github.com/DylanST76/birthdayhub.git
cd birthdayhub
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### 3. Configure environment variables
```bash
# Copy example env files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit the .env files with your values
```

### 4. Setup database
```bash
cd backend
npx prisma migrate dev --name init
npx prisma db seed
```

### 5. Start development
```bash
# From root directory
npm run dev
```

This starts both frontend (http://localhost:5173) and backend (http://localhost:3001).

## 🐳 Docker Setup

```bash
docker-compose up -d
```

Access the app at http://localhost:3000

## 📁 Project Structure

```
birthdayhub/
├── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── store/          # Zustand state stores
│   │   ├── services/       # API service layer
│   │   ├── types/          # TypeScript type definitions
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # Global styles
├── backend/                # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/      # Express middleware
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utilities
│   │   └── types/          # TypeScript types
│   ├── prisma/             # Database schema & migrations
│   └── tests/              # Backend tests
├── docker-compose.yml      # Docker orchestration
├── nginx.conf              # Nginx configuration
└── .github/workflows/      # CI/CD pipelines
```

## 🔑 Environment Variables

See `backend/.env.example` and `frontend/.env.example` for all required variables.

## 📖 API Documentation

API documentation is available at `http://localhost:3001/api/docs` (Swagger UI) when running in development mode.

## 🧪 Testing

```bash
# Run all tests
npm test

# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && npm test

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Production with Docker
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Manual deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License — see [LICENSE](./LICENSE) for details.

## 👨‍💻 Author

Built with ❤️ by **DylanST76**

---

<p align="center">Made with 🎂 for everyone who wants to never forget a birthday again</p>
