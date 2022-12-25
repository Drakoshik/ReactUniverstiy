import React, {useEffect} from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../store/actions/categoriesActions";

const Layout = () => {
    const dispatch = useDispatch()
    const {categories, isLoading} = useSelector(state => state.categoriesSlice)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Lab 6.1 routing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown disabled={isLoading} title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/">No Category</NavDropdown.Item>
                                {isLoading ? <></> : categories.map((item, index) => (
                                    <NavDropdown.Item key={index} href={`/category/${item}/products`}>{item}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <Form onSubmit={e => {
                            e.preventDefault()
                            if (e.currentTarget.search.value !== ""){
                                navigate(`products/search/${e.currentTarget.search.value}`)
                            }
                        }} className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                id={'search'}
                            />
                            <Button type={'submit'} variant="outline-success">Search</Button>
                        </Form>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
};

export default Layout;