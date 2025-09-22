import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <>
      <nav>
        <div className='logo-box'>
          <img src="" alt="" />
          <h4>------ Store</h4>
        </div>
        {/* phone */}
        <div className='phone-menu'></div>
        
        
        <div className='menu'>
          <ul>
            <li><Link to={"/"}><a href="">Home</a></Link></li>
            <li>
              <Link to={"/two"} ><a href=''>Produtes</a></Link>
            </li>
            <li><Link to={"/there"}><a href="">Order</a></Link></li>
            <li><Link to={"/four"}><a href="">Content Us</a></Link></li>
          </ul>

         <Link to={"./"}><button>Logout</button></Link> 
        </div>
      </nav>
    </>
  )
}
