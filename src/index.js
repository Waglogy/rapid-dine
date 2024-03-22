import express from 'express'
import connectDB from './db/conn.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config({
    path: './.env',
})

connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log('ERROR: ' + error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log('mongoDB connection FAILED !!!' + err)
    })
