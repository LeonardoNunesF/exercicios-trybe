FROM node:16-alpine

WORKDIR /my-app

COPY . .

RUN npm install --loglevel=error

ENV BROWSER=none

ENTRYPOINT ["npm"]

CMD ["start"]