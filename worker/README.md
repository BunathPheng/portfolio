# Portfolio Cloudflare Worker

This Worker lives in the same repository as the Next.js portfolio, but deploys
independently. It manages public files in R2 and metadata in D1.

## Setup

```bash
cd worker
npm install
npx wrangler login
npx wrangler d1 create portfolio-db
```

Copy the returned database ID into `wrangler.jsonc`, then create the tables:

```bash
npm run db:init:remote
```

Create the R2 bucket named `portfolio`, connect the custom domain
`assets.bunath.me`, and set the Worker secret:

```bash
npx wrangler secret put ADMIN_UPLOAD_TOKEN
```

Deploy:

```bash
npm run deploy
```

## API

- `GET /` health check
- `GET /files` list public files
- `POST /files` upload a file using `Authorization: Bearer <ADMIN_UPLOAD_TOKEN>`
- `DELETE /files/:key` delete a file using the same authorization header

The frontend should use the returned `url` directly from the R2 custom domain.
