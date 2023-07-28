const express = require('express');

const router = express.Router()

// *** Always but static routes above the dynamic routes bc they will end up messin gup your routes since these routes can be confused with the dynamic routes when working with the params  ***

// STATIC ROUTES:

router.get("/", (req, res) => {
    res.send('Users List')
})


//    example of writing individual route
// router.get("/:id", (req, res) => {
//     id = req.params.id;
//     res.send(`User Id ${id}`)
// })


// DYNAMIC ROUTES:


// allows us to define the route in 1 location, all the requests (get/put/delete) will match the route
// instead of writing the routes that would start with the same param in the url individually
router.route("/:id")
    // anything after the : is considered a params
    .get((req, res) => {
        id = req.params.id; // how to access the id from the url to get that specific user's id
        res.send(`User Id ${id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })


// exporting the router so I can import it in the server.js file
module.exports = router
