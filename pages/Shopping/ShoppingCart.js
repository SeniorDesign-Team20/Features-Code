import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';



function ShoppingCart() {
  //const { cartItems, setCartItems, cartItemCount, setCartItemCount } = props;
  const { cartItems, removeFromCart } = useContext(CartContext);
  const history = useHistory();

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    return parseFloat(total.toFixed(2));
  };
  const checkout = () => {
    // your checkout logic goes here
    console.log('Checkout clicked');
    history.push('/checkout');
  };
  return (
    <Container>     
      {/* Tab Name */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopping Cart</title>
      </Helmet>
      <View style={styles.heading}>
              <h3 className="main-heading">Your Cart</h3>
              <div className="underline mx-auto"></div>
      </View>
      {cartItems.length === 0 ? (
        <div className="text-center mt-5">Your cart is empty! Check out our products page to add items...</div>
      ) : (
      <div>
      {cartItems.map((item, index) => (
        <Row key={index} style={styles.cartItem}>
          <Col xs={12} sm={3}>
          {/* //                       <img src={item.image} alt={item.name} style={{ width: 80, height: 80, marginRight: 10 }} /> */}

            <Card.Img variant="top" src={item.image} style={styles.cartItemImage} />
          </Col>
          <Col xs={12} sm={9}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Price: ${item.price}</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
              <Button
                variant="danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Card.Body>
          </Col>
          <View style={styles.separator} />
        </Row>
      ))}
      <Row>
        <Col>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
          <Button variant="primary" style={styles.checkoutButton} onClick={checkout}> Checkout </Button>
        </Col>
      </Row>
      </div>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cartItem: {
    marginBottom: 20,
  },
  cartItemImage: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 20,
    marginBottom: 20,
    paddingRight:50
  },
  separator: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  checkoutButton: {
    //textAlign: 'right',
    //paddingLeft: 50,
  },
});


export default ShoppingCart;
