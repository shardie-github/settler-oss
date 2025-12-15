# Settler Web - Public Protocol Documentation & SDK Downloads

This is the public web application for Settler Protocol. It provides:
- Protocol documentation
- SDK and CLI download instructions
- Self-hosting guides
- Information about Console and Enterprise (deployed from private repo)

## Deployment

This app is configured for Vercel deployment.

### Vercel Setup

1. Connect your GitHub repository to Vercel
2. Set the root directory to `apps/web`
3. Vercel will automatically detect Next.js and configure build settings

### Environment Variables

No environment variables required for basic deployment.

### Build Configuration

- **Framework**: Next.js 14
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Local Development

```bash
cd apps/web
npm install
npm run dev
```

Visit http://localhost:3000

## Routes

- `/` - Homepage with protocol overview
- `/protocol` - Protocol documentation
- `/protocol/sdk` - SDK documentation
- `/protocol/spec` - API specification
- `/protocol/examples` - Code examples
- `/download` - SDK and CLI download instructions
- `/docs` - Documentation index
- `/docs/self-hosting` - Self-hosting guide
- `/console` - Console information (deployed from private repo)
- `/enterprise` - Enterprise information (deployed from private repo)

## Notes

- Console and Enterprise features are deployed from a private repository
- This public app focuses on OSS Protocol documentation and SDK downloads
- All SDKs and CLI tools are MIT licensed
