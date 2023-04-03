import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Checkout() {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the form data to a server or API
    // For testing purposes, you can simply console.log the form data
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));
    // After submitting the form, redirect the user to the confirmation page
    history.push('/confirmation');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" required />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Enter your state" required />
        </Form.Group>

        <Form.Group controlId="formZip">
          <Form.Label>Zip code</Form.Label>
          <Form.Control type="text" placeholder="Enter your zip code" required />
        </Form.Group>

        <Form.Group controlId="formCardName">
          <Form.Label>Name on card</Form.Label>
          <Form.Control type="text" placeholder="Enter the name on your card" required />
        </Form.Group>

        <Form.Group controlId="formCardNumber">
          <Form.Label>Card number</Form.Label>
          <Form.Control type="text" placeholder="Enter your card number" required />
        </Form.Group>

        <Form.Group controlId="formExpDate">
          <Form.Label>Expiration date</Form.Label>
          <Form.Control type="text" placeholder="Enter your card's expiration date" required />
        </Form.Group>

        <Form.Group controlId="formCvc">
          <Form.Label>CVC</Form.Label>
          <Form.Control type="text" placeholder="Enter your card's CVC number" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Place order
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
