# oFig-API-node-server
Node.js HTTPS API server for oFig - Nintendo project

---
Install dependencies :
```sh
yarn
```
For https :
- rename `cert.pem.dist` to `cert.pem` and paste your certificate
- rename `key.pem.dist` to `key.pem` and paste your RSA key

Start with nodemon :
```sh
# Listening on https://localhost:3001
yarn start
```

---
Routes :
- `GET` https://localhost:3001/games
- `GET` https://localhost:3001/characters
