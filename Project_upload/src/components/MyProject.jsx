// import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function MyProject() {

 

  return (
    <div className='shadow px-4 py-4 rounded'>
            <div className="d-flex justify-content-between">
          <h4 className='text-success'> My Project</h4>
          <AddProject />
        </div>
        <div className="mt-4 bg-light p-3 rounded d-flex justify-content-between ">
          <h5></h5>

          <div className="d-flex align-items-center">
            <EditProject />
            <Link>
              <FontAwesomeIcon icon={faGlobe} className='text-warning ms-3'  />
            </Link>
            <Link >
              <FontAwesomeIcon icon={faGithub} className='text-success ms-3' />
            </Link>
            <FontAwesomeIcon icon={faTrash}className='text-success ms-3 me-5' />
          </div>
        </div>
          
          
        
        <p className='fs-2 text-danger'>No Project to display</p>
        
    </div>
  )
}

export default MyProject