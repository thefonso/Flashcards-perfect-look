// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults({"static":"./public"})
const express = require('express');
const path = require('path');

server.use('/db', middlewares, router);
server.use(express.static(path.join(__dirname, 'build')));
server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(8080, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
