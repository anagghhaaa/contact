import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  
  return (
    <>
    
    <div className='container-fluid  mt-3 d-flex align-items-center text-center' >
        <Row className='align-items-center'>
          <Col sm={12} md={6} className='p-4'>
            <h2>
            <i className="fa-solid fa-address-book me-2"  />     

              Smart Contact
            </h2>
            <p className='mt-4' style={{ textAlign: 'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta sed mollitia,
               quod voluptatum ea praesentium ipsam exercitationem nemo quis tempora quibusdam, officiis suscipit rerum in delectus doloremque. Exercitationem, necessitatibus deleniti
               quod voluptatum ea praesentium ipsam exercitationem nemo quis tempora quibusdam, officiis suscipit rerum in delectus doloremque. Exercitationem, necessitatibus deleniti. </p>
            <div className='d-grid'> 
              <Link to={'/login'} className='btn btn-primary'>Let's Start</Link>
            </div>
          </Col>
          <Col sm={12} md={6}  >
            <img src="https://static.vecteezy.com/system/resources/previews/009/583/351/original/3d-illustration-contact-options-png.png" className='img-fluid ' style={{height:'auto',maxHeight:'500px'}}  alt="introimg" />
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Home