import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'



function Profile() {

  const [open, setOpen] = useState(false);

 
  return (
    <>
    {/* 
    collapse=> ued to make a drop down once we click on the arrow
    onMouseLeave={()=>setOpen(false)}=> it used to close the collpase after leaving from that section */}
      <div className='mx-3 p-3 shadow rounded' onMouseEnter={()=>setOpen(true)} >
        <div className="d-flex justify-content-between mt-3">
          <h5>Profile</h5>
          <button type="button" className='btn btn-outline-success' onClick={() => setOpen(!open)}>
          {!open?
            <FontAwesomeIcon icon={faAngleDown} />
            :
            <FontAwesomeIcon icon={faAngleUp} />
          }
          </button>
        </div>
          
          <Collapse in={open} >
          <div>
            <div className="d-flex align-items-center justify-content-center p-2 flex-clumn">
              <label htmlFor="profImg">
                <input type="file" id='profImg' className='form-control' style={{display:'none'}} />
                <img src={preview?preview:"https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg"} alt="" className='rounded-circle' style={{width:'180px', height:'180px'}}/>
              </label>
            </div>
            <form>
              <div className="mb-3 pt-2 px-4">
                <input type="text" placeholder='Github' className='form-control' />
              </div>
              <div className="mb-3 pt-2 px-4">
                <input type="text" placeholder='Linkedin' className='form-control'/>
              </div>
              <div className="mb-3 pt-2 px-4">
                <button type='button'className='btn btn-success form-control' >update</button>
              </div>
            </form>
          </div>
          </Collapse>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Profile