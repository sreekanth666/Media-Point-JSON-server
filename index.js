// Import JSON server
const jsonServer = require('json-server')

// Create JSON server using json-server library
const mediaPlayerServer = jsonServer.create()

// Setup path/route for db.json file
const router = jsonServer.router("db.json")

// Return middlewares used by JSON
const middleware = jsonServer.defaults()

// Setup port for server app
const port = 4000 || process.env.PORT

// Use middleware and router in mediaPlayer
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// The server should listen for request from frontend
mediaPlayerServer.listen(port, () => {
    console.log(`Media player server started at port ${port} and waiting for request.`);
})