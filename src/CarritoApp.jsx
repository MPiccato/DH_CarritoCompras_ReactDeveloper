import {Routes, Route, Navigate} from 'react-router-dom'

import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from './pages/CartPage'
import { NavBarComponent } from './components/NavBarComponent'

const CarritoApp = () => {
  return (

    <>
    <NavBarComponent />
  
    <div className="container">
        <Routes>
            <Route path='/' element={<ProductsPage/>}></Route>
            <Route path='/carrito' element={<CartPage/>}></Route>
            <Route path='/*' element={<Navigate to ='/'/>}></Route>
            
        </Routes>
    </div>

 
    </>
   
  )
}

export default CarritoApp