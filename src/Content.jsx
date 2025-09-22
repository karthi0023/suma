import React from 'react'
import './Content.css'
export const Content = () => {
  const sendmsg=()=>{
    alert("Thanking You.......!")
  }
  return (
    <>
      <div className='four-box'>
        <div className='details-box'>
          <div className='store-details'>
            <div className='store-details-box'>
              <div className='store-address-box'>
                <img src="call_65dp_FFFFFF_FILL0_wght600_GRAD0_opsz48.svg" alt="" />
                <div className='stroe-infrom'>
                  <h4>Call Us</h4>
                  <p>+91 9787008141</p>
                </div>
              </div>
              <div className='store-address-box'>
                <img src="drafts_65dp_FFFFFF_FILL0_wght600_GRAD0_opsz48.svg" alt="" />
                <div className='stroe-infrom'>
                  <h4>Email Us</h4>
                  <p>kalimuthumuthu@gmail.com</p>
                </div>
              </div>
              <div className='store-address-box'>
                <img src="distance_65dp_FFFFFF_FILL0_wght600_GRAD0_opsz48.svg" alt="" />
                <div className='stroe-infrom'>
                  <h4>Address</h4>
                  <p>Address here,Kavodapayama ralu road,Thirupur to Erode via,Thirupuru-987 789</p>
                </div>
              </div>
            </div>
          </div>
          {/* content user */}
          <div className='user-content-box'>
            <div className='content-head'>
              <h3>Contact Us</h3>
            </div>
            <form action="">
              <input type="text" placeholder='Frist Name' name="" id="a" />
              <input type="text" placeholder='Last Name' name="" id="b" />
              <input type="text" placeholder='Phone Number' name="" id="c" />
              <input type="text" placeholder='Email ID' name="" id="d" />
              <input type="text" placeholder='Any Message' name="" id="e" />
              <button onClick={()=>sendmsg()}>Send message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
