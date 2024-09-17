const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const web = require('./routes/web')
const connectDb = require('./db/connectdb')
const fileUpload = require("express-fileupload");//for file upload
const cors = require('cors')

app.use(express.json())// for data get from api/postman

app.use(cors()) // for api communication

// for file upload
app.use(fileUpload({ useTempFiles: true }));

connectDb()



//load route
app.use('/api', web)
//localhost:4000/api







//server create
app.listen(process.env.PORT, () => {
    console.log(`Server running on Localhost: ${process.env.PORT}`);
})