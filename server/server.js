// npm init then npm i

// npm i nodemon

const express = require('express');
const path = require('path')

const app = express();
app.use(express.json()); // when posting (posting meaning adding something new; i.e: creating a new user) json information to your server, to be able to process json information then use this middleware
app.use(express.static('public')) // serves up statics routes like the index.html file
app.use(express.urlencoded({ extended: true}))  // by default express DOES NOT let you access the body so you have to put in this middleware; this allows use to acces information coming from forms, if you don't use this then you will get a wanring

const port = process.env.PORT || 8080;

app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

//   this would work if you weren't serving up your static index.html file
// app.get('/', (req, res, next) => {
//     // will send content or data
//     // res.send(
//     //     `<html>
//     //     <h1>Shanntal</h1>
//     //     <h6>Morel</h6>
//     //     </html>`
//     // )

//     // will send and download file
//     //res.download('server.js')

//     res.send('HOME PAGE')
// })


console.log('hi')

const userRouter = require('../routes/user')


// adding "/users" here makes sure that that router is used with anything that has /users in the url
app.use("/users", userRouter)