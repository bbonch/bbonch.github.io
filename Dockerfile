# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY app ./app
COPY components ./components
COPY styles ./styles
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY types.d.ts .

ARG NEXT_PUBLIC_ANALYTICS_ID
ENV NEXT_PUBLIC_ANALYTICS_ID=${NEXT_PUBLIC_ANALYTICS_ID}

RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG NEXT_PUBLIC_ANALYTICS_ID
ENV NEXT_PUBLIC_ANALYTICS_ID=${NEXT_PUBLIC_ANALYTICS_ID}

CMD ["node", "server.js"]