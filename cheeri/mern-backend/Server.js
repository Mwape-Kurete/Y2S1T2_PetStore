// const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); //additional setting 

const User = require('./models/User'); 

const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file
// dotenv.config();

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const user = new User({
  name: 'mwaps', 
  email: 'mwapsisworking@gmail.com',
  password: '!mwaps_IS_workingX@m9!'
});

// Simple route for testing
app.get("/", (req, res) => {
  res.send(user);
});


// User routes
const userRoutes = require('./routes/UserRoutes');
app.use('/api/users', userRoutes);

// product routes
const productRoutes = require('./routes/ProductRoutes');
app.use('/api/products', productRoutes);

const start = async() => {
  
try{
  await mongoose.connect(MONGO_URI); 

  // Launch server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}catch(e){
  console.log(e.message);
}
  

}

start(); 


//the following goes in the connect 
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }