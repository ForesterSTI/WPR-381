const express = require('express')
const app = express()
const port = 8000

/*app.get('/', (req, res) =>{
    res.send('Welcome from express')
})*/

app.get('/', (req, res) =>{
    res.send('Welcome from express')
})

app.listen(port,()=>{
console.log(`Server running on http://localhost:${port}`)
})


