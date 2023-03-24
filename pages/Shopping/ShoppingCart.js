import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Helmet } from 'react-helmet';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { CartContext } from './CartContext';

function ShoppingCart() {
  //const { cartItems, setCartItems, cartItemCount, setCartItemCount } = props;
  const { cartItems, removeFromCart } = useContext(CartContext);

  const checkout = () => {
    // your checkout logic goes here
    console.log('Checkout clicked');
    console.log(cartItems.length);
  };

  return (
      <div>
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
          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: 600 }}>
              <ListGroup>
                {cartItems.map((item, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <div>
                      <img src={item.image} alt={item.name} style={{ width: 80, height: 80, marginRight: 10 }} />
                      <span>{item.name + " "}</span>
                    </div>
                    <div>
                      <span className="mr-3">${item.price}</span>
                      <Button variant="danger" onClick={() => removeFromCart(item)}>Remove</Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="mt-4 d-flex justify-content-end">
                <Button variant="primary" onClick={checkout}>Checkout</Button>
              </div>
            </div>
          </div>
         )}
      </div>
  );
}

const styles = StyleSheet.create({
  heading: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40
  },
})
export default ShoppingCart;
