const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // ensure db.json is in the same folder
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
