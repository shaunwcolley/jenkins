FROM node@sha256:e7d096a65b49e93ff93eed74201c5d8eaa5daa184c9a1b8a02d34e738078f8b5

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app sources
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
