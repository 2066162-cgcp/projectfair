import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'


function Home() {
  // create state check the login using token stored inside session storage


  return (
    <>
      <div className="container-fluid bg-dark text-light" style={{height:'100vh'}}>
        <Row className='align-items-center p-3 p-md-5'>
          <Col xs={12} md={6} className='ps-5'>
            <h1 className='text-light'style={{fontSize:'70px'}}> Project Fair</h1>
            <p className='mt-4'>One stopdestination for all software developmetn Projects</p>
            
            <Link to={'/login'}>
            <button className='btn btn-warning mt-4'> Get Started <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button>
            </Link>
            :
            <Link to={'/dashboard'}>
            <button className='btn btn-warning mt-4'> Manage Project <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <img src="https://banner2.cleanpng.com/20180422/djw/kisspng-project-management-body-of-knowledge-project-manag-project-management-5adc52a7a8de02.6053994715243885196917.jpg" style={{marginTop:'100px'}} className='w-75' alt="" />
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <h1 className='text-center'>Explore Our Projects</h1>
        <div className="row">
            <div className="col-md-4 p-4">
            <ProjectCard  />
            </div>
        </div>

        <Link to={'/project'}>
          <h5 className="text-center">see more projects</h5>
        </Link>
      </div>
    </>
  )
}

export default Home