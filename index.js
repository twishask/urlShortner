const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT=5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trialdb', { useNewUrlParser: true })
.then(res=>{
    console.log("Database connected..")
}).catch(function(e){
    console.log(e);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({extended: false}));

//Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));