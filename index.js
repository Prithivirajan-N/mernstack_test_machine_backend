const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const router = require('./routes/allRoute')



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(router);

mongoose.connect('mongodb://localhost:27017/dealsdray', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB successfully!');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.get('/' ,(req,res)=>{
    res.send('server was started');
})


const Port = 8005;

app.listen(Port,()=>{
    console.log(`server was start on ${Port}`);
});