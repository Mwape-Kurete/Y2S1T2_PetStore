const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
    productName: {
        type: String, 
        required: true, 
        trim: true,
    }, 
    category: {
        type: String, 
        required: true, 
         
        enum: ['toys', 'food', 'accessories', 'grooming'], // Restrict to these values
    },
    price: {
        type: Number,
        required: true,
        min: 0, //prevent price from being negative
    },
    description: {
        type: String, 
        required: true, 
    },
    image: {
        type: String,  //image as a path or url 
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema)