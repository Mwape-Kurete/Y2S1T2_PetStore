import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';
import { UserContext } from "../UserContext";  // Correct import statement

function CommentSection({ productId }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);  // Access user from UserContext

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/comments/${productId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating && comment) {
      const newComment = { productId, userName: user.name, rating, comment };
      try {
        const response = await axios.post('http://localhost:5000/api/comments', newComment);
        setComments([...comments, response.data]);
        setRating("");
        setComment("");
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    }
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Leave a Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRating" className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select Rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Terrible</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formComment" className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Review
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Reviews</h2>
          <ListGroup>
            {comments.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>Rating: </strong> {review.rating}
                <br />
                <strong>Comment: </strong> {review.comment}
                <br />
                <span className="user-handle">@{review.userName}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CommentSection;
