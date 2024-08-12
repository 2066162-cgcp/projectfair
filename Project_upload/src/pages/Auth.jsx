import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row} from 'react-bootstrap'
import {Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {
  const navigate = useNavigate();

  const[userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:""
  })

  const handleRegister= async()=>{

    const{username, email, password}=userDetails

    if(!username || !email || !password){
      toast.error('please fill the credentials')
    }else{
      const result=await registerApi(userDetails)
      console.log(result);
      if(result.status==200){
        toast.success("Registration Successfull")
        navigate('/login')
      }else{
        toast.error("something went wrong. please try after sometime")
      }
    }
  }

  // const handleLogin = async()=>{
  //   const{email,password}=userDetails

  //   if(!email ||!password){
  //     toast.error('please fill the credentials')
  //   }else{
  //     const result = await loginApi({email,password})
  //     console.log(result);
  //     if(result.status==200){
  //       toast.success('Login successfull')
        
  //       console.log(result.data.token);

  //       sessionStorage.setItem('existingUser',JSON.stringify(result.data.existingUser))
  //       sessionStorage.setItem('token',result.data.token)
        
  //       setUserDetails({
  //         username:"",
  //         email:"",
  //         password:""
  //       })

  //       setTimeout(()=>{
  //         navigate('/')
  //       },2000)
  //     }else{
  //       toast.error(result.response.data)
  //     }  
  //   }
  // }
  // console.log(userDetails);

  return (
    <div className="container-fluid d-flex justify-content-center align-aitems-center flex-column" style={{height:'100vh'}}>
      <div className="container w-75">

        <Link to={'/'} className='text-warning fs-5' style={{textDecoration:'none'}}>
          <FontAwesomeIcon icon={faArrowLeft} className='me-3'/>
          Back to home
        </Link>

        <div className="bg-success rounded p-3 mt-2">
          <Row>
            <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-aitems-center'>
              <img src="https://image.winudf.com/v2/image/Y29tLmpqYXBwLmVhc3lsb2NrX2ljb25fMF9lYzkxZGI2/icon.png?w=&fakeurl=1" alt="" className='w-75' /> 
            </Col>
            <Col sm={12} md={6} className='p-5 text-light d-flex justify-content-center align-items-center flex-column'>
                <h3 className='text-light'><FontAwesomeIcon icon={faStackOverflow} className='me-3 text-light'/>Project Fair</h3>
                {register?
                <h5 className='text-light'>Sign up Your Account</h5>
                : 
                <h5 className='text-light'>Sign in Your Account</h5>
                }
                <form className='mt-4 w-75'>
                  {register&&
                  <div className="mb-3">
                    <input type="text" placeholder='Username' className='form-control' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
                  </div>
                  }
                  <div className="mb-3">
                    <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" placeholder='Password' className='form-control' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
                  </div>
                  <div className="mb-3">
                    {register?
                    <div>
                      <button type="button"className='btn btn-warning w-100' onClick={handleRegister}>Register</button>
                      <p className='mt-3'>
                        Already a user? Click here to <Link to={'/login'} className='text-danger'>login</Link>
                      </p>
                    </div>
                    :
                    <div>
                      <button type="button"className='btn btn-warning w-100' >Login</button>
                      <p className='mt-3'>
                        New user? Click here to <Link to={'/register'} className='text-danger'>Register</Link>
                      </p>
                    </div>}
                  </div>
                </form>
            </Col>
          </Row>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Auth