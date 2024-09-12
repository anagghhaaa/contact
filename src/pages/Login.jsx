import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { loginApi } from '../service/allApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Login() {
   const nav=useNavigate()

  const [user,setUser]=useState({
    email:"",password:""
  })
  const handleLogin=async()=>{
    console.log(user)
    const {email,password}=user
      if(!email || !password){
        toast.warning("Enter valid input")
      }
    else{
      const result=await loginApi(email,password)
           if(result.status==200){
            if(result.data.length>0){
              toast.success("Successfully Login")
              nav('/contact')
              setUser({
                 email:"",password:""
              })
            }
            else{
              toast.warning("Invaild Email/Password")
            }
           }
           else{
            toast.error("Something went wrong")
           }
    }
  }
  return (
    <>
      <div className='container-fluid  align-items-center text-center'>
        <Row>
          <Col sm={12} md={6}  >
            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg" className='img-fluid ' style={{ height: 'auto', maxHeight: '500px' }} alt="introimg" />

          </Col>

          <Col sm={12} md={6}>
            <h2 className='mt-5 p-3'>
              <i className="fa-solid fa-right-to-bracket me-2" />
              LOGIN HERE</h2>

            <InputGroup className=" p-5">
              <InputGroup.Text id="inputGroup-sizing-default" >
                E-MAIL ID
              </InputGroup.Text>
              <Form.Control
                aria-label="Default" placeholder='Enter Your Email ID' onChange={(e)=>{setUser({...user,email:e.target.value})}}
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
              <button className='btn btn-info ' onClick={handleLogin}>LOGIN</button>
                <div className='text-end mt-2'>
                  <Link to={'/register'} className='text-info'>New User</Link>
                </div>
            </div> 
            </Col>
        </Row>
      </div>
    </>
  )
}

export default Login