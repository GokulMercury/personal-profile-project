const express = require('express');
const router = express.Router();

const profileRoute = require('./profile.route');
const contactRoute = require('./contact.route');

const routesIndex = [
    {
        path: '/profile',
        route: profileRoute
    },
    {
        path: '/contact',
        route: contactRoute
    }
    
]

routesIndex.forEach((route)=>{
    router.use(route.path, route.route);
})

module.exports = router;