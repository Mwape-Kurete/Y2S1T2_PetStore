import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function AccountModal({ visible, message, onClose }) {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const handleClose = () => {
    setShow(false);
    onClose(); // Notify parent to reset visibility state
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Account Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          <Link to="/Home" style={{ color: '#fff', textDecoration: 'none' }}>
            Let's Go
          </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AccountModal;