import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <>
        <div className="row w-100 mb-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="d-flex flex-column" style={{width:'100%'}}>
                    <img src="https://images.squarespace-cdn.com/content/v1/6006dd43893bc73c30c23d0d/1611062696335-6GPMFGGT0LNC898XH6OS/ezgif.com-crop.gif" alt="No image" width={'100%'} />
                    <h1>Look Like You Lost</h1>
                    <button className='btn btn-success' type="button">
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" /> <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                        Back to Home
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    </>
  )
}

export default PageNotFound