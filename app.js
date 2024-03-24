const express=require('express');
const fs=require('fs');
const morgan=require('morgan');
const moviesRouter=require('./Routes/tourroutes');

const app=express();
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'))
app.use('/api/v1/tours',moviesRouter);
module.exports=app;
