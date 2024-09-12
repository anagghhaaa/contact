import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { checkEmailApi,registerApi } from '../service/allApi';
function Register() {
  const [user,setUser]=useState({
    username:"",email:"",password:""
  })
  const nav=useNavigate()

  const handleRegister=async()=>{
    console.log(user);
    const {username,email,password}=user
    if(!username || !password || !email){
      toast.warning("Enter valid inputs!!")

    }else{
      const result=await checkEmailApi(email)
        console.log(result);
        if(result.data.length>0){
          toast.warning("Email ID already in use!!!")
        }
        else{
          const result=await registerApi(user)
          if(result.status==201){
            toast.success("successfully Registered")
            setUser({
               username:"",email:"",password:""
            })
            nav('/login')
          }
          else{
            toast.error('Regisration Failed')
            console.log(result);
            
          }
        }
    }
  }
  return (
    <>
      <div className='container-fluid  align-items-center text-center'>
        <Row>


          <Col sm={12} md={6}>
            <h2 className='mt-5 p-3 text-primary'>
            <i className="fa-solid fa-registered" />
             EGISTER</h2>
            <InputGroup className=" ps-5 pe-5 pb-5 mt-5">
              <InputGroup.Text id="inputGroup-sizing-default" >
                E-MAIL ID
              </InputGroup.Text>
              <Form.Control
                aria-label="Default" placeholder='Enter Your Email ID' onChange={(e)=>{setUser({...user,email:e.target.value})}}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className=" ps-5 pe-5 pb-5">
              <InputGroup.Text id="inputGroup-sizing-default" >
                USER NAME
              </InputGroup.Text>
              <Form.Control
                aria-label="Default" placeholder='Enter Your Name' onChange={(e)=>{setUser({...user,username:e.target.value})}}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>


            <InputGroup className=" ps-5 pe-5">
              <InputGroup.Text id="inputGroup-sizing-default">
                PASSWORD
              </InputGroup.Text>
              <Form.Control
              type='password'
                aria-label="Default" placeholder=' Password' onChange={(e)=>{setUser({...user,password:e.target.value})}}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <br />
            <div className='d-grid ps-5 pe-5 pt-2'>
              <button className='btn btn-primary ' onClick={handleRegister}>REGISTER</button>
              <div className="text-end mt-2">
                <Link to="/login" className='text-info'>Already a User</Link>
              </div>
            </div>           
           </Col>
          <Col sm={12} md={6}  >
            <img src="https://img.freepik.com/premium-vector/illustration-sign-up-log-wireframe-idea-showcasing-various-ui-elements_1278800-10956.jpg?semt=ais_hybrid" className='img-fluid mt-5 ' style={{ height: 'auto', maxHeight: '500px' }} alt="introimg" />
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Register