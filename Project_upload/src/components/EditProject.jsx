import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';


function EditProject({project}) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <FontAwesomeIcon icon={faPenToSquare} className='text-info' onClick={handleShow}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Detailes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <label htmlFor="addImg">
                <input id='addImg' type="file" style={{display:'none'}} key={key} onChange={(e)=>handleFileUpdate(e)}/>
                <img src='' alt="" width={'100%'}/>
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form className='p-3'>
                <div className="mb-3">
                  <input type="text" placeholder='Title' className='form-control'/>
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Language' className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Github' className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Website' className='form-control'/>
                </div>
                <div className="mb-3">
                  <textarea name="" placeholder='Overview' className='form-control' rows={'4'} ></textarea>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default EditProject