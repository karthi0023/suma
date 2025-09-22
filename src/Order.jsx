import React, { useEffect, useState } from 'react'
import './Order.css'
import { Link } from 'react-router-dom';

export const Order = ({ cart ,setcart}) => {
  const [total, settotal] = useState(0);

  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + parseInt(curr.amonut), 0));
  }, [cart])
  return (
    <>

      <div className='or-list-box'>
        <h2>Bakiyalaskmi store :</h2>
        <table>
          <tr>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amonut</th>
          </tr>
          {
            cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>9.9%</td>
                <td>{item.amonut}</td>
              </tr>
            ))
          }
          <tr>
            <td></td>
            <td></td>
            <th>Total</th>
            <td>{total}</td>
          </tr>
        </table>
        <Link to={"/order"}><button className='order-btn'>Order</button></Link>
      </div>
    </>
  )
}
