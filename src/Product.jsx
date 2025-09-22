import { useState } from 'react'
import './product.css'
import products from './sumathe.json'
export const Product = ({ cart, setcart }) => {
    const [search, setsearch] = useState("");
    const order = (item) => {
        setcart([...cart, item]);
    }
    return (
        <>
            <div className='product-box'>
                <img className='search-ions' src="search_46dp_000000_FILL0_wght500_GRAD0_opsz48.svg"  alt="" />
                <input type="text" name="" onChange={(e) => setsearch(e.target.value)} placeholder='Search' id="" />
                <div className='product-item-box'>
                    {products.filter((item) => {
                        return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase());
                    }).map((item, index) => (
                        <div key={index} className='item'>
                            <img src={item.img} alt="" />
                            <div className='item-name-box'>
                                <p>{item.name}</p>
                                <div className='kg-box'>
                                <b>{item.amonut}</b>
                                <p>{item.kg}</p>
                                </div>
                                <button onClick={() => order(item)}>Add</button>
                            </ div>
                        </div>
                    ))}

                </div>
          </div>
        </>
    )
}
