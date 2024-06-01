const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Sending uploads to a file in backend directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }); // Initializing multer

router.post('/upload', upload.single('image'), async (req, res) => {
  const { productName, category, price, description } = req.body;
  const image = req.file ? req.file.path.replace(/\\/g, '/') : null;

  try {
    const newProduct = new Product({
      productName,
      category,
      price,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error saving product:', err);
    res.status(500).json({ error: 'Failed to save product' });
  }
});

// Route to fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Route to fetch a product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});


module.exports = router;
