FROM node:12
WORKDIR /easydev
COPY /template .
RUN yarn cache clean
RUN yarn install
EXPOSE 3000