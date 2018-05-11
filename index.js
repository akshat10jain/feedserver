const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('hello');
})

const PORT=process.env.PORT || 5000

app.listen(PORT,(err)=>{
    if(err){
        console.log('not started')
    }
    console.log('started')
})