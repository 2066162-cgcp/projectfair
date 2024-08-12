import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container-fluid mt-5">
        <div className='row p-3 bg-success'>
        <div className="col-md-4 p-4 ms-md-5" >
                <h4 style={{color:'white'}}>
                    <FontAwesomeIcon icon={faVideo} beat size="xl"  className='pe-3'/>React Bootstrap
                </h4>
                <p style={{textAlign:'justify', color:'white'}} className='mt-md-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam, odit ratione ad culpa et vitae voluptate nemo tempora animi velit sint dicta voluptatem at accusamus vero atque officiis molestiae?
                </p>
        </div>
        <div className="col-md-2 p-4 ms-md-5 d-flex justify-content-center">
            <div style={{color:'white'}}>
                <h4 style={{color:'white'}}>Links</h4>
                <p ><Link to={'/'} style={{color:'white'}}>Landing Page</Link></p>
                <p><Link to={'/home'} style={{color:'white'}}>Home</Link></p>
                <p> <Link to={'/watch-history'} style={{color:'white'}}>Watch History</Link></p>
            </div>
        </div>

        <div className="col-md-2 p-4" style={{color:'white'}}>
                <h4 style={{color:'white'}}>Guides</h4>
                <p>React</p>
                <p>Bootstrap</p>
                <p>Bootswatch</p>
        </div>

        <div className="col-md-3 p-4">
                <h4 style={{color:'white'}}>Contacts</h4>
                <div className='d-flex mt-4'>
                    <Form.Control type="text"  />
                    <Button className='ms-2' variant="warning">Contact Us</Button>{' '}
                </div>
                <div className='mt-4 d-flex justify-content-between'>
                        {/*study this=> justify-content-between, justify-content-evenly, justify-content-around */}
                <FontAwesomeIcon icon={faInstagram} size='2xl' />
                <FontAwesomeIcon icon={faFacebook} size='2xl'/>
                <FontAwesomeIcon icon={faTwitter} size='2xl'/>
                <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            
                </div>

        </div>
        <div className="col-md-1"></div>
    </div>
    </div>
  )
}

export default Footer