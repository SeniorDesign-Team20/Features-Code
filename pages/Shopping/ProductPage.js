import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./productData";
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { StyleSheet } from 'react-native';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));
  const { cartItems, addToCart } = useContext(CartContext);
  const [addedProduct, setAddedProduct] = useState(null); // add state to track the product that has been added to the cart
  const [showAlert, setShowAlert] = useState(false); // add state for showing alert
  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true); // show alert when product is added to cart
    setAddedProduct(product); // set the added product to show the alert within its card
  };



  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  useEffect(() => {
    let timeoutId;
    if (showAlert) {
    timeoutId = setTimeout(() => {
        setShowAlert(false);
    }, 2500); // hide alert after 3 seconds
    }
    return () => {
    clearTimeout(timeoutId);
    };
    }, [showAlert]);
  
  return (
    <Container style={styles.container}>
    {/* Show alert when product is added to cart */}
    {showAlert &&
    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        Product added to cart!
    </Alert>}
      <Card style={styles.card}>
        <Card.Img variant="top" src={product.image} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{"$"+product.price}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <Container style = {styles.cardButton}>
                        {addedProduct && addedProduct.name === product.name && showAlert ? (
                            <Button variant="primary" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus} bounce /> </Button>
                        ):  <Button variant="primary" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus}/> </Button>}             
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: 300,
      margin: 10,
    },
    cardImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    cardButton: {
        flex: 1,
        flexDirection: 'row'
     },
  });
  

export default ProductPage;
