const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const path = require("path")
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://twishask:<twisha197>@cluster0-g2v0c.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trialdb', { useNewUrlParser: true })
.then(res=>{
    console.log("Database connected..")
}).catch(function(e){
    console.log(e);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({extended: false}));
app.use(express.static(path.join(__dirname, "client", "build")))

//Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

if (process.env.NODE_ENV === 'production') {           
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));