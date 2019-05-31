FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

# RUN if [["$NODE_ENV" = "development"]]; \
#   then npm install; \
#   else npm install --only=production; \
#   fi

RUN npm install

CMD [ "npm", "start" ]

COPY . .
