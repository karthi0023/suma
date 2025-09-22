import React from 'react'
import { useState, useEffect } from 'react';
import './Orderdetails.css'
import { Link, useNavigate } from 'react-router-dom';

export const Orderdetails = ({ cart,setcart }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a6e7240c-ac54-4316-b980-5fcc584bd805");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  const [total, settotal] = useState(0);
  const [item, setitem] = useState("");
  const itemsname = "Total Amonut :";
  const navigator=useNavigate();
  const ordered = () => {
    alert("Your Order sussesfully...Thanking you...Have A Good Day!");
    setcart([]);
    navigator("/two")
  }
  useEffect(() => {
    setitem(cart.map((productname) => productname.name))
    settotal(cart.reduce((acc, curr) => acc + parseInt(curr.amonut), 0));
  }, [cart])
  return (
    <>
      <div className='orderdetails-box'>
        <Link to={"/there"}><div className='cancal'><img src="close_50dp_000000_FILL0_wght500_GRAD0_opsz48.svg" alt="" /></div></Link>
        <div className='details'>
          <h3>Your Address</h3>
          <form className='form-order' onSubmit={onSubmit}>
            <input type="text" placeholder='Enter Name' name="name" id="name" required />
            <input type="text" placeholder='Phone Number' name="Phone" id="phone" required />
            <input type="text" placeholder='Phone Number' name="OtherPhone" id="otherphone" required />
            <input type="text" placeholder='Address' name="Address" id="address" required />
            <input type="text" value={itemsname} id="total-product" required />
            <input type="text" value={total} name="Tota-amonut" id="total-amount" required />
           <button onClick={() => ordered()}>Order</button>
            <textarea className='item-list' name="List of item" value={item}></textarea>
          </form>
        </div>
             {/* succse-box in html */}
      </div>

 
    </>
  )
}
