import React, {useEffect, useState} from 'react';
import {Button, Modal, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories, fetchProducts} from "../redux/actions/ProductsActions";
import ProductCard from "./ProductCard/ProductCard";

const Header = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.productsSlice)
    const {products, isLoading} = useSelector(state => state.productsSlice)
    const [favoriteProducts, setFavoriteProducts] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        updateFavorite(JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : [])
        setShow(true)
    };

    const categoryHandler = (category) => {
        dispatch(fetchProducts(category))
    }
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    useEffect(() => {
        if (products !== []){
            updateFavorite(JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : [])
        }
    }, [products])


    const updateFavorite = (json) => {
        let array = []
        products?.forEach((product) => {
            json.forEach(favoriteId => {
                console.log(product.id === favoriteId)
                if (product.id === favoriteId){
                    array.push(product)
                }
            })
        })
        setFavoriteProducts(array)
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className={"ms-3"} href="#home">React Lab4-5</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => categoryHandler(null)}>No category</NavDropdown.Item>
                            {categories.map(item => (
                                <NavDropdown.Item onClick={() => categoryHandler(item)}>{item}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Button onClick={handleShow} className={"me-3"} variant={'danger'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Favorites</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row justify-content-center"}>
                        { favoriteProducts.length > 0 ? favoriteProducts.map(item => (
                            <ProductCard item={item}/>
                        )) : <h2 className={'text-center'}>Пусто..</h2>
                            }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;