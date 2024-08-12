import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'
import Header from '../components/Header'

function Dashboard() {


  return (
    <>
    <Header logout={true}/>

    <h3 className='mt-5 ms-3'>Welcome <span className='text-danger'>{username}</span></h3>

    <Row className='mt-5 container-fluid p-5' >
        <Col sm={12} md={8}>
          <MyProject />
        </Col>
        <Col sm={12} md={4}>
          <Profile />
        </Col>
    </Row>
    </>
  )
}

export default Dashboard