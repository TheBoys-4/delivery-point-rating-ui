FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
CMD [ "npx", "serve", "build" ]


FROM nginx:mainline-alpine3.17
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]