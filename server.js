const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const app= require('./app.js');
mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true
}).then((con)=>{
    console.log(con);
    console.log("db connection sucessful!!!!")
}).catch((err)=>{
    console.log("some error has occured")
})

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`app is running at the port no:${port}....`)
})