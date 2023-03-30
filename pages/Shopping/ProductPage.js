import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./productData";
import { Container, Button, Alert } from 'react-bootstrap';
import { StyleSheet, Image, View, Text } from 'react-native';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
        </Alert>
      }
      <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{"$" + product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <View style={styles.buttonContainer}>
            {addedProduct && addedProduct.name === product.name && showAlert ? (
              <Button variant="primary" onClick={() => handleAddToCart(product)}>
                Add To Cart <FontAwesomeIcon icon={faCartPlus} bounce />
              </Button>
            ):  
              <Button variant="primary" onClick={() => handleAddToCart(product)}>
                Add To Cart <FontAwesomeIcon icon={faCartPlus}/>
              </Button>
            }             
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    width: '100%',
  },
  productImage: {
    width: '40%',
    height: 1000,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 500
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
});

export default ProductPage;