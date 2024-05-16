FROM node:lts-alpine3.19 AS base
WORKDIR /app

COPY package.json ./

FROM base AS prod-deps
RUN yarn install

FROM prod-deps AS build
COPY . .
RUN yarn build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs