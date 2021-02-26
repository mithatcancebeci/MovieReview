const express=require('express')
const bodyParser=require('body-parser')


const app=express();

require("./mongodb-connection")
const userRouter=require('./routers/user')
const movieRouter=require('./routers/movie')
app.use('/user',userRouter);
app.use('/movie',movieRouter);
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen('3000',function(){
    console.log('listening')
})