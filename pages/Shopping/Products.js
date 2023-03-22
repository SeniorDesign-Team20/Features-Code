import React from "react";
import { StyleSheet, View } from 'react-native';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as prodcutInfo from "./../../files_to_modify/Products/product_info";

import product1Image from "./../../files_to_modify/Products/product1.png";
import product2Image from './../../files_to_modify/Products/product2.png';
import product3Image from './../../files_to_modify/Products/product3.png';
import product4Image from './../../files_to_modify/Products/product4.png';
import product5Image from './../../files_to_modify/Products/product5.png';
import product6Image from './../../files_to_modify/Products/product6.png';
import product7Image from './../../files_to_modify/Products/product7.png';

function Products(){
    const products = [
        { name: prodcutInfo.name1, price: prodcutInfo.price1, description: prodcutInfo.description1, image: product1Image },
        { name: prodcutInfo.name2, price: prodcutInfo.price2, description: prodcutInfo.description2, image: product2Image },
        { name: prodcutInfo.name3, price: prodcutInfo.price3, description: prodcutInfo.description3, image: product3Image },
        { name: prodcutInfo.name4, price: prodcutInfo.price4, description: prodcutInfo.description4, image: product4Image },
        { name: prodcutInfo.name5, price: prodcutInfo.price5, description: prodcutInfo.description5, image: product5Image },
        { name: prodcutInfo.name6, price: prodcutInfo.price6, description: prodcutInfo.description6, image: product6Image },
        { name: prodcutInfo.name7, price: prodcutInfo.price7, description: prodcutInfo.description7, image: product7Image },
      ];
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
            <View style={styles.container}>
                
                {products.map((product, index) => (
                    <Card key={index} style={styles.card}>
                    <Card.Img variant="top" src={product.image} style={styles.cardImage} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{"$"+product.price}</Card.Subtitle>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="primary">Add To Cart</Button>
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
  });

export default Products;