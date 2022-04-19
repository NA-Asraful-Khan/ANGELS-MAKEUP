import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><i>ANGELS MAKEUP</i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                            {
                                user ?
                                    <button className='btn text-muted' onClick={handleSignOut} >Logout</button>
                                :
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;