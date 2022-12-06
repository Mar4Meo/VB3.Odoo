// Express & DotEnv & Cors & Port \\

const express = require('express')

const app = express()

const dotenv = require('dotenv')

const cors = require('cors')

dotenv.config()

const Port = 5000

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static('public'))

app.set('views', './views')

app.set('view engine', 'ejs')

app.get('/', (req , res) => {
    res.render('Index')
})

// Router Middleware \\


// Redirect Error 404 File \\

app.use((req , res) => {
    res.status(404).render('404')
})

// Listen Port  \\

app.listen(Port, ()=>{
    console.log(`You Run`)
})
