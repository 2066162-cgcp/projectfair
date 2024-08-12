import { faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({logout}) {
  return (
      <Navbar className="bg-success">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-light fs-4'>
              <FontAwesomeIcon icon={faStackOverflow} className="fa-2x me-3" />ProjectFair
            </Navbar.Brand>
          </Link>
          {logout&&
            <Link to={'/'}>
              <button type='button' className="btn btn-warning"><FontAwesomeIcon icon={faPowerOff} />Log out</button>
            </Link>
          }
        </Container>
      </Navbar>
  )
}

export default Header