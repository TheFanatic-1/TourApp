const express=require('express');
const custom=(req,res,next)=>{
    // res.send('<h2>This is custom middleware running...</h2>');
    console.log('This is custom middleware running.....');
    next();
    
};

const app=express();
app.use(custom);
app.get('/middleware',(req,res)=>{
    res.status(200).send('<h1>THIS IS TUTORIAL FOR CUSTOM MIDDLEWARE</h1>');
})
app.listen('3000',()=>{
    console.log('App is listening.......');
})