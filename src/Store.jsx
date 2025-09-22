import React from 'react'
import './Store.css'
import { Link } from 'react-router-dom';
export const Store = () => {

  return (
    <>
      {/* first page */}
      <div className='frist'>
        <div className='animation'>
          <button className='one'>
            <img src="arrow_upward_65dp_FFFFFF_FILL0_wght500_GRAD0_opsz48.svg" alt="" />
          </button>
          <button className='two'>
            <img src="arrow_downward_65dp_FFFFFF_FILL0_wght500_GRAD0_opsz48.svg" alt="" />
          </button>
        </div>
        <div className='content-box'>
          <h2>Welcome to our Bakiyalaskmi store</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore nostrum harum nemo modi temporibus officiis incidunt praesentium vero inventore atque, dolore provident rem vitae quibusdam suscipit quaerat voluptatem sit?</p>
          <div className='fr-btn'>
          <Link to={"/two"}><button className='fr-btn-one'>Shop Now</button></Link>
          <Link to={"/four"}><button className='fr-btn-two'>Contact Us</button></Link>            
          </div>
        </div>
        <div className='fr-image'>
          <img className='mani-animation' src="red-pepper-7247194_1280.jpg" alt="" />
          <img className='mani-animation aa' src="to-dye-43417_1280.jpg" alt="" />
          <img className='mani-animation bb' src="bake-599521_1280.jpg" alt=""/>
          <img className='mani-animation cc' src="caraway-4564182_1280.jpg" alt="" />
          <img className='mani-animation dd' src="cinnamon-stick-514243_1280.jpg" alt="" />
          <img className='mani-animation ee' src="food-3062139_1280.jpg" alt="" />
          <img className='mani-animation f' src="IMG-20250711-WA0001.jpg" alt="" />
          <img className='mani-animation g' src="IMG-20250711-WA0004.jpg" alt="" />
          <img className='mani-animation h' src="IMG-20250711-WA0007.jpg" alt="" />
          <img className='mani-animation i' src="IMG-20250711-WA0008.jpg" alt="" />
          <img className='mani-animation j' src="IMG-20250711-WA0010.jpg" alt="" />
          <img className='mani-animation k' src="IMG-20250711-WA0016.jpg" alt="" />
          <img className='mani-animation l' src="IMG-20250711-WA0017.jpg" alt="" />
          <img className='mani-animation m' src="IMG-20250711-WA0019.jpg" alt="" />
          <img className='mani-animation n' src="IMG-20250711-WA0020.jpg" alt="" />
          <img className='mani-animation o' src="IMG-20250711-WA0021.jpg" alt="" />
          <img className='mani-animation p' src="olive-oil-1596417_1280.jpg" alt="" />
          <img className='mani-animation q' src="red-pepper-7247194_1280.jpg" alt="" />
          <img className='mani-animation r' src="seeds-5517796_1280.jpg" alt="" />
        </div>
        <img className='main-image' src="chili-powder-2198805_1280.jpg" alt="" />
      </div>
      {/* second page */}
      <div className='second-box'>
        <div className='sec-content'>
          <img src="" alt="" />
          <div className='sec-con'>
            <p className='sec-name'>k.Kalimuthu</p>
            <p className='sec-location'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quos eius inventore laudantium voluptas veritatis </p>
            <p className='sec-number'>Phone:9787008141,9787008141</p>
          </div>
        </div>
        <img className='sec-right-img' src="" alt="" />
      </div>
    </>
  )
}
