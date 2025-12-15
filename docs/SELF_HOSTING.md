# Self-Hosting Guide

This guide explains how to self-host the Settler Protocol. The protocol is open-source (MIT licensed) and can be deployed on your own infrastructure.

---

## Overview

The Settler Protocol consists of:
- **API Server** - Protocol API endpoints
- **SDKs** - Client libraries for various languages
- **CLI Tool** - Command-line interface

All of these components are open-source and can be self-hosted.

---

## Prerequisites

- Node.js 18+ (for API server)
- Database (PostgreSQL recommended)
- Redis (for caching, optional)
- Docker (recommended for easy deployment)

---

## Quick Start

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/shardie-github/settler-oss.git
cd settler-oss

# Start services
docker-compose up -d
```

### Option 2: Manual Installation

```bash
# Install dependencies
npm install

# Build protocol packages
npm run build

# Start API server
npm start
```

---

## Configuration

### Environment Variables

Create a `.env` file:

```env
# API Configuration
PORT=3000
NODE_ENV=production

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/settler

# Redis (optional)
REDIS_URL=redis://localhost:6379

# API Keys
API_KEY_SECRET=your-secret-key-here

# CORS
ALLOWED_ORIGINS=https://yourdomain.com
```

---

## API Server Deployment

### Using Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY packages/protocol ./packages/protocol
COPY packages/shared ./packages/shared

RUN npm run build --workspace=packages/protocol

EXPOSE 3000

CMD ["node", "packages/protocol/dist/server.js"]
```

### Using Node.js

```bash
# Install dependencies
npm install

# Build protocol
npm run build --workspace=packages/protocol

# Start server
node packages/protocol/dist/server.js
```

---

## Database Setup

### PostgreSQL

```sql
CREATE DATABASE settler;
CREATE USER settler WITH PASSWORD 'your-password';
GRANT ALL PRIVILEGES ON DATABASE settler TO settler;
```

Run migrations:
```bash
npm run migrate
```

---

## SDK Usage with Self-Hosted Instance

### TypeScript/Node.js

```typescript
import { SettlerClient } from '@settler/sdk';

const client = new SettlerClient({
  apiKey: process.env.SETTLER_API_KEY,
  baseURL: 'https://your-protocol-instance.com', // Your self-hosted URL
});

const result = await client.reconcile({
  source: [...],
  target: [...],
});
```

### Python

```python
from settler import SettlerClient

client = SettlerClient(
    api_key=os.environ.get('SETTLER_API_KEY'),
    base_url='https://your-protocol-instance.com'  # Your self-hosted URL
)

result = client.reconcile({
    'source': [...],
    'target': [...],
})
```

### CLI

```bash
export SETTLER_API_KEY=your-api-key
export SETTLER_BASE_URL=https://your-protocol-instance.com

settler reconcile --file transactions.csv
```

---

## Production Considerations

### Security

- Use HTTPS/TLS for all connections
- Rotate API keys regularly
- Implement rate limiting
- Use environment variables for secrets
- Enable CORS only for trusted origins

### Performance

- Use a reverse proxy (nginx, Caddy)
- Enable caching (Redis)
- Use connection pooling for database
- Monitor resource usage

### Monitoring

- Set up health check endpoints
- Monitor API response times
- Track error rates
- Set up alerts

---

## Troubleshooting

### Database Connection Issues

```bash
# Check database connectivity
psql -h localhost -U settler -d settler

# Verify environment variables
echo $DATABASE_URL
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process or change PORT in .env
```

### Build Errors

```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

---

## Updating

```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Rebuild
npm run build

# Restart services
docker-compose restart
# or
pm2 restart settler
```

---

## Support

- **Documentation**: See [docs](./docs/) directory
- **Issues**: [GitHub Issues](https://github.com/shardie-github/settler-oss/issues)
- **Discussions**: [GitHub Discussions](https://github.com/shardie-github/settler-oss/discussions)

---

## Related Documentation

- [BOUNDARY_MAP.md](./BOUNDARY_MAP.md) - Protocol architecture
- [LICENSING.md](./LICENSING.md) - Licensing information
- [VERIFICATION.md](./VERIFICATION.md) - Verification and testing

---

Last updated: 2024-01-XX
