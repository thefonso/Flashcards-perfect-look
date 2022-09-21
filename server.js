// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults({"static":"./public"})

server.use(middlewares)
// Add this before server.use(router)
server.use(router)
server.listen(8080, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
