import { BrowserRouter, Routes ,Route } from "react-router-dom"
import HomePage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/PageNotFound'

function App() {
 return (
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='product' element={<Product/>}/>
       <Route path='pricing' element={<Pricing/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path="app" element={<AppLayout/>}  />
       <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
 )
}

export default App
