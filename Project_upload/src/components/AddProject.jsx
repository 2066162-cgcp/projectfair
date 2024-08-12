import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';



function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button type="button" className='btn btn-success ms-auto' onClick={handleShow}>Add Project</button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Detailes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <label htmlFor="projImg">
                <input id='projImg' type="file" style={{display:'none'}} key={key} onChange={(e)=>{handleFile(e)}}/>
                <img src={preview?preview:"https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="" width={'100%'}/>
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form className='p-3'>
                <div className="mb-3">
                  <input type="text" placeholder='Title' value={projectDetails.title} className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Language' value={projectDetails.language} className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Github' value={projectDetails.github} className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Website' value={projectDetails.website} className='form-control'/>
                </div>
                <div className="mb-3">
                  <textarea name="" placeholder='Overview' value={projectDetails.overview} className='form-control' rows={'4'} ></textarea>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleReset}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default AddProject