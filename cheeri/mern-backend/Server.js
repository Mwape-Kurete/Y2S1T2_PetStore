const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //additional setting
const cors = require('cors');
const path = require('path');

mongoose.set('strictQuery', false);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Simple route for testing
app.get("/", (req, res) => {
  res.send('API is running...');
});

// User routes
const userRoutes = require('./routes/UserRoutes');
app.use('/api/users', userRoutes);

// Product routes
const productRoutes = require('./routes/ProductRoutes');
app.use('/api/products', productRoutes);

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // Launch server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}

start();
