import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate();

  const logout = () => {
    nav('/');
    sessionStorage.removeItem('userData');
  };

  return (
    <>
      <Navbar bg="primary" expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-light d-flex align-items-center">
            <i className="fa-solid fa-address-book  fs-4 me-2" />
            {' '} SMART CONTACT
          </Navbar.Brand>
          <div className="ms-auto">
            <button
              className="btn border-light text-light me-2"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
