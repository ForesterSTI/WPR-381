const express = require("express");//Import the Express module
const app = express();//Create an Express application
const PORT = process.env.PORT || 3000;//Uses process.env.PORT if available (common in production), or defaults to 3000 (useful for local development). Ensures the app works in both environments without changes.

const path = require('path');//Import the path module


//Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

//Define routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));// Serve 'home.html' for the root route
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public/about.html"));// Serve 'about.html' for the root route
})


//ensure that app.listen is always at the end of your code.
app.listen(PORT, () => {
    console.log(`The server is open on http://localhost:${PORT}`)
})