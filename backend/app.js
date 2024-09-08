require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
require('./models/model')
require('./models/post')
const app=express();
const port=5000;
app.use(cors());
app.use(express.json())
app.use(require("./routes/auth"));
app.use(require("./routes/createpost"));
app.use(require("./routes/user"));


mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("connected to database")
}).catch(()=>{
  console.log("not connected to database")
})


app.listen(port,()=>{
    console.log("server is running on port 5000")
})