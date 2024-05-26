
import './App.css';
import Navbar from './components/Navbar/navbar';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Product from "./pages/product";
import Cart from "./pages/cart";
import Loginsignup from "./pages/loginsignup";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kid_banner from "./components/assets/banner_kids.png"
//import Home from './components/Home/Home';
//import Search from './components/search/search';
//import ProtectedPage from './components/ProtectedPage';
//import Category from './pages/Category';

function App() {
  return (
    <div>
     
      
      <BrowserRouter>
        <Navbar/>  
       
      <Routes>
        
        {/* <Route path='/home' element={<Home/>}/> */}
      {/* 
       
      <Route path='/' element={<ProtectedPage/>}>
       <Search/>  
      
      
       
       
      </Route> */}
      
        <Route path='/shop' element={<Shop/>}/> 
        
       <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory  banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory  banner={kid_banner} category="kid"/>}/> 
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>  
       <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/> 
        
      
      
      </Routes>
      

      
      <Footer/>
      
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
