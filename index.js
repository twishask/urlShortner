const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT=5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trialdb')
.then(res=>{
    console.log("Database connected..")
});

app.use(express.json({extended: false}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));