import {useState, useContext, useEffect} from "react";
import { StyleSheet } from 'react-native';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import products from "./productData";
import { useNavigate } from 'react-router-dom';
import { allCategories } from "../../files_to_modify/Products/product_info";
import "./../../styles.css"


function Products(){
    const [allProducts, setAllProducts] = useState(products)
    const { addToCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false); // add state for showing alert
    const [addedProduct, setAddedProduct] = useState(null); // add state to track the product that has been added to the cart
    const [sortOption, setSortOption] = useState("");
    const [categoryFilter, setCategoryFilter] = useState(""); // add state for category filter
    const [searchInput, setSearchInput] = useState(""); // State for search box text

    const handleAddToCart = (product) => {
        addToCart(product);
        setShowAlert(true); // show alert when product is added to cart
        setAddedProduct(product); // set the added product to show the alert within its card
      };
    const navigate = useNavigate();
    const handleSort = (option) => {
      let sortedProducts;
      switch(option) {
        case "AZ":
          sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "ZA":
          sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "LH":
          sortedProducts = products.sort((a, b) => a.price - b.price);
          break;
        case "HL":
          sortedProducts = products.sort((a, b) => b.price - a.price);
          break;
        default:
          sortedProducts = products;
      }
      setSortOption(option);
      setAllProducts(sortedProducts);
    }
    
    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`);
      };
    const handleCategoryFilter = (event) => {
        setCategoryFilter(event.target.value); // update category filter state
    }
    const handleSearchInput = (event) => {
      setSearchInput(event.target.value); // update search input state
    }
    // Add effect to hide the alert after a certain amount of time has elapsed
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
        // filter products based on category filter state
        // filter products based on category filter and search input states
      const filteredProducts = allProducts.filter(product => {
        if (categoryFilter && !product.categories.includes(categoryFilter)) {
            return false;
        }
        if (searchInput && !product.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return false;
        }
        return true;
    });
    return (
        <div>
          {/* Tab Name */}
          <Helmet>
            <meta charSet="utf-8" />
            <title>Products</title>
          </Helmet>
          <Container style={styles.heading}>
            <h3 className="main-heading">Products</h3>
            <div className="underline mx-auto"></div>
          </Container>
          <Container style={styles.searchBarContainer}>
            <Form.Control type="text" placeholder="Search products" value={searchInput} onChange={handleSearchInput} /> {/* add search box */}
          </Container>
          {/* Show alert when product is added to cart */}
          <Container style={styles.alert}>
            {showAlert &&
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                <span>Product added to cart!</span>
              </Alert>
            }
          </Container>
          <Container style={styles.filterSortContainer}>
            <div style={styles.filter}>
              <label>Filter by category:</label>
              <select onChange={handleCategoryFilter}>
                  <option value="">All</option>
                  {allCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                  ))}
              </select>
            </div>
            <div style={styles.sort}>
              <label>Sort by:</label>
              <select onChange={(e) => handleSort(e.target.value)}>
                <option value="">--Select Option--</option>
                <option value="AZ">Alphabetical: A to Z</option>
                <option value="ZA">Alphabetical: Z to A</option>
                <option value="LH">Price: Low to High</option>
                <option value="HL">Price: High to Low</option>
              </select>
            </div>
          </Container>
          <Container style={styles.container}>
            <Row>
                  {filteredProducts.map((product, index) => (
                  <Card key={index} style={styles.card} >
                  <Card.Img variant="top" src={product.image} style={styles.cardImage} onClick={() => handleProductClick(product)}/>
                  <Card.Body>
                      <Card.Title onClick={() => handleProductClick(product)}>{product.name}</Card.Title>
                      <Card.Subtitle onClick={() => handleProductClick(product)} className="mb-2 text-muted">{"$"+product.price}</Card.Subtitle>
                      <Card.Text onClick={() => handleProductClick(product)}>{product.description}</Card.Text>
                      <Container style = {styles.cardButton}>
                          {addedProduct && addedProduct.name === product.name && showAlert ? (
                              <Button variant="primary" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus} bounce /> </Button>
                          ):  <Button variant="primary" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faCartPlus}/> </Button>}             
                      </Container>
                  </Card.Body>
                  </Card>
              ))}
            </Row>
          </Container>
          
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
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
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
        paddingTop:20
    },
    filterSortContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      paddingLeft: 40,
      paddingRight: 40
    },
    filter: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      //margin: 10,
      marginBottom: 20
    },
    sort: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      //margin: 10,
      marginBottom: 20
    },
    searchBarContainer:{
      paddingLeft: 40,
      paddingRight: 40
    },
  });

export default Products;
