const express =require('express')
const app=express()
const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){          //res=respond, req=request
    res.send('Hello from Shreya"s world');
});

app.get('/chip', (req,res)=>{
    res.send('Chipi Chipi chapa chapa');
});
const personRoutes=require('./routes/personRoutes');
app.use('/person', personRoutes);
   
app.listen(3000);

