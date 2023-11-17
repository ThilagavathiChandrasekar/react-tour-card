import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Card from 'react-bootstrap/Card';
import "./styles/BsExample.css";
import london from './london.jpg';
import paris from './paris.jpg';
import newyork from './newyork.jpg';
const Bootstrap =()=> {
  return (
     <>
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="#action1" className='nav-link'>Home</Nav.Link>
            <Nav.Link  href="#action2" className='nav-link'>About</Nav.Link>
            <Nav.Link  href="#action2" className='nav-link'>Tours</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

          <div className='cards'>
      <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src ={london} className='card-img' />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>LONDON</Card.Title>
        <Card.Text>
         London Royal palace Tour
        </Card.Text>
        <p className='info'>info</p> 
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={newyork} className='card-img' />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>NEW YORK</Card.Title>
        <Card.Text>
          Newyork Bridge Tour
        </Card.Text>
        <p className='info'>info</p> 
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={paris} className='card-img' />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>PARIS</Card.Title>
        <Card.Text>
          Paris Light Tour
        </Card.Text>
        <p className='info'>info</p> 
      </Card.Body>
    </Card>
      </div>
   </>

  );
}

export default Bootstrap;
