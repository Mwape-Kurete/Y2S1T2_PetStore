import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from 'axios';

function PortalForm() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    
    try {
      const response = await axios.post('http://localhost:5000/api/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product uploaded successfully:', response.data);
  
      // Clear the form
      setProductName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setImage(null);
      
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h2>Upload New Pet Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCategory" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="toys">Toys</option>
                <option value="food">Food</option>
                <option value="accessories">Accessories</option>
                <option value="grooming">Grooming</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Image Upload</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Upload Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PortalForm;
