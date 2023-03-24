import {useState, useContext, useEffect} from "react";
import { StyleSheet, View } from 'react-native';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as prodcutInfo from "./../../files_to_modify/Products/product_info";
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

//import { CartProvider } from './CartContext';
import product1Image from "./../../files_to_modify/Products/product1.png";
import product2Image from './../../files_to_modify/Products/product2.png';
import product3Image from './../../files_to_modify/Products/product3.png';
import product4Image from './../../files_to_modify/Products/product4.png';
import product5Image from './../../files_to_modify/Products/product5.png';
import product6Image from './../../files_to_modify/Products/product6.png';
import product7Image from './../../files_to_modify/Products/product7.png';


function Products(){
    const { addToCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false); // add state for showing alert
    const [addedProduct, setAddedProduct] = useState(null); // add state to track the product that has been added to the cart

    const handleAddToCart = (product) => {
        addToCart(product);
        setShowAlert(true); // show alert when product is added to cart
        setAddedProduct(product); // set the added product to show the alert within its card
      };
    const products = [
        { name: prodcutInfo.name1, price: prodcutInfo.price1, description: prodcutInfo.description1, image: product1Image },
        { name: prodcutInfo.name2, price: prodcutInfo.price2, description: prodcutInfo.description2, image: product2Image },
        { name: prodcutInfo.name3, price: prodcutInfo.price3, description: prodcutInfo.description3, image: product3Image },
        { name: prodcutInfo.name4, price: prodcutInfo.price4, description: prodcutInfo.description4, image: product4Image },
        { name: prodcutInfo.name5, price: prodcutInfo.price5, description: prodcutInfo.description5, image: product5Image },
        { name: prodcutInfo.name6, price: prodcutInfo.price6, description: prodcutInfo.description6, image: product6Image },
        { name: prodcutInfo.name7, price: prodcutInfo.price7, description: prodcutInfo.description7, image: product7Image },
      ];
    
      // Add effect to hide the alert after a certain amount of time has elapsed
    useEffect(() => {
        let timeoutId;
        if (showAlert) {
        timeoutId = setTimeout(() => {
            setShowAlert(false);
        }, 5000); // hide alert after 3 seconds
        }
        return () => {
        clearTimeout(timeoutId);
        };
    }, [showAlert]);

    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
            </Helmet>
            <View style={styles.heading}>
                <h3 className="main-heading">Products</h3>
                <div className="underline mx-auto"></div>
            </View>
                {/* Show alert when product is added to cart */}
                {showAlert &&
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Product added to cart!
                </Alert>
                }
            <View style={styles.container}>
                {products.map((product, index) => (
                    <Card key={index} style={styles.card}>
                    <Card.Img variant="top" src={product.image} style={styles.cardImage} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{"$"+product.price}</Card.Subtitle>
                        <Card.Text>{product.description}</Card.Text>
                        <View style = {styles.cardButton}>
                            {addedProduct && addedProduct.name === product.name && showAlert ? (
                                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus} bounce /> </Button>
                            ):  <Button variant="primary" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus}  /> </Button>
                            }
                            {/* Show alert within the card of the added product */}
                            {/* {addedProduct && addedProduct.name === product.name && showAlert &&
                                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                                    Added!
                                </Alert>
                            } */}
                        </View>
                    </Card.Body>
                    </Card>
                ))}
            </View>

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
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
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
    alert:{
        paddingTop:10
    }
  });

//export const cartItemCount = () => cartItems.length;
export default Products;