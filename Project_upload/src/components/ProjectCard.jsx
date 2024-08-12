import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Card style={{ width: '100%' }} className='shadow mt-4 border-0 rounded-0' onClick={handleShow}>
            {/* images from uploads can be taken by using the code: pfServer.use('/uploads',express.static('./uploads')) */}
            <Card.Img variant="top" src='' width={'250px'} />
            <Card.Body>
                <Card.Title className='text-center'></Card.Title>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} style={{width:'100%'}}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm={12} md={6}>
                    <img src='' alt="" width={'100%'}/>
                </Col>
                <Col sm={12} md={6}>
                    <h4>Description</h4>
                    <p>
                        
                    </p>
                    <h4 className='mt-3'>Technologies:</h4>
                    <p></p>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-start'>
            <Link>
                <FontAwesomeIcon icon={faLink} size='2xl'/>
            </Link>
            <Link >
                <FontAwesomeIcon icon={faGithub} size='2xl'/>
            </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard