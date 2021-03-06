import React from 'react';

import './Header.css';
import KomsaLogo from '../../img/komsa_logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

//페이지 상단 화면
function Header() {
  // const logoUrl = '../../img/komsa_logo.png'

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="komsa-header">
          <Container fluid>
            <button>
              <img className='logo' alt='' src={KomsaLogo}></img>
            </button>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 komsa-header-ship-list">
                  <a className='right-sides' href="#">선박1</a>
                  <a className='right-sides' href="#">선박2</a>
                  <a className='right-sides' href="#">선박3</a>
                  <div className='logout-box'>
                    <button className='logout-btn'>로그아웃</button>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;