'use strict';

const Hapi = require('hapi');
const routes = require('./app/routes');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

const Routes = require('./app/routes');
/**
* Add all the routes
*/
for (var route in Routes) {
    server.route(Routes[route]);
}

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
   console.log('Server running at:', server.info.uri);
});
