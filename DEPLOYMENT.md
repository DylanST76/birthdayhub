# 🚀 BirthdayHub Deployment Guide

## Prerequisites

- Docker 24+ and Docker Compose v2
- A server with at least 2GB RAM
- Domain name (optional)
- SSL certificate (optional, recommended)

## Environment Setup

### 1. Clone and configure

```bash
git clone https://github.com/DylanST76/birthdayhub.git
cd birthdayhub
cp backend/.env.example backend/.env.production
```

### 2. Edit production environment

Edit `backend/.env.production` with your actual values:

```env
NODE_ENV=production
DATABASE_URL=postgresql://USER:PASSWORD@postgres:5432/birthdayhub
REDIS_URL=redis://:REDIS_PASSWORD@redis:6379
JWT_SECRET=your_very_long_random_secret
JWT_REFRESH_SECRET=another_very_long_random_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
OPENAI_API_KEY=sk-your_openai_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
```

### 3. Deploy

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### 4. Run migrations

```bash
docker exec birthdayhub_backend_prod npx prisma migrate deploy
```

## SSL with Let's Encrypt

```bash
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com
```

Update `nginx.conf` to enable HTTPS.

## Monitoring

```bash
# View logs
docker-compose logs -f

# Check status
docker-compose ps
```
