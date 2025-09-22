import { useState ,createContext, useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Store } from './Store'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import { Product } from './Product'
import { Order } from './Order'
import { Nav } from './Nav'
import { Content} from './Content'
import {Orderdetails} from './Orderdetails'
// import './App.css'
// import { Image } from './Image'
// import { Music } from './Music.jsx' 
function App() {

  const [cart,setcart]=useState([]);
  return (
    <>
       {/* <Image /> */}
       {/* <Music />  */}
       <BrowserRouter>
       <Nav />
       <Routes>
        <Route path="/" element={<Store />}/>
        <Route path="/two" element={<Product cart={cart} setcart={setcart} />}/>
        <Route path="/there" element={<Order cart={cart} setcart={setcart} />}/>
        <Route path="/four" element={<Content />}/>
        <Route path="/order" element={<Orderdetails cart={cart}  setcart={setcart}/>}/>
       </Routes>
       </BrowserRouter>
      
     
       
       {/* <Product /> */}
       {/* <Order /> */}
          </>
  )
}

export default App
