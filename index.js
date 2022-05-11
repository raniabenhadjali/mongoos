const express = require('express')
const mongoose = require ('mongoose')
require('doteenv').config()
const app = express()




const PORT =process.env.PORT
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(()=>console.log('DATABASE CONNECTED SUCCESSFULLY'))
.catch(err=>console.log(err))

app .listen(PORT , ()=>{
    crossOriginIsolated.log('SERVER IS RUNING ON PORT 5000 ')
})