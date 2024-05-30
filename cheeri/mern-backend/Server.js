const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Simple route for testing
app.get("/", (req, res) => {
  res.send("Hello World");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// User routes
const userRoutes = require('./routes/UserRoutes');
app.use('/api/users', userRoutes); 

// Launch server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
