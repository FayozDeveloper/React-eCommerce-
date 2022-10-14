import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import {useSelector} from "react-redux";

function TestNavbar(props) {
    const state = useSelector((state) => state.handleCart)

    return (
        <Navbar collapseOnSelect  expand="lg" className="navbar navbar-expand-lg navbar-light bg-white py-3 px-4 shadow-sm">
            <Navbar.Toggle />
            <Link className="navbar-brand fw-bold fs-4 px-4" to="/">
                F.K COLLECTION
            </Link>
            <div className='container'>
            <Navbar.Collapse>
                <Nav className="d-flex mx-auto mb-2 mb-lg-0">
                    <Nav.Item>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/products">
                           Products
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link"  to="/contact">
                            Contact
                        </Link>
                    </Nav.Item>
                </Nav>
                <div className="buttons">
                    <Link to="/login" className="btn btn-outline-dark">
                        <i className="fa fa-sign-in me-1"></i> Login</Link>
                    <Link to="/register" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-user-plus me-1"></i> Register</Link>
                    <Link to="/cart"  className="btn btn-outline-dark ms-2">
                        <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</Link>
                </div>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default TestNavbar;