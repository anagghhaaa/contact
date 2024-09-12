import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Addco from '../components/Addco'
import Listco from '../components/Listco'
function Contact() {
             const[response,setResponse] =useState('')  
  return (
    <>
    <div className='container-fluid'>
      <Row>
        <Col sm={12} md={3}>
        <Addco res={setResponse}/>
        </Col>
        <Col sm={12} md={9}>
         <Listco response={response}/>
        </Col>
       
      </Row>
    </div>
    </>
  )
}

export default Contact






