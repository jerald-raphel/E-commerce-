import { useContext,useEffect,useRef,useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopcontext'
import "./css/category.css"
import nav_dropdown from "../components/assets/nav_dropdown.png"




const Category = () => {
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef= useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.menuList.toggle('nav-menu-visible');
        e.toggle.menuList.toggle('open');
      }
      
    const [add_product,setAdd_Product]=useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/addproduct')
      .then(res=>res.json())
      .then((data)=>setAdd_Product(data))
    },[])
    console.log(add_product);

    
      
  return (
    <div className='top-bottom'>

       <img className='nav-dropdown' onClick={dropdown_toggle} scr={nav_dropdown} alt=""/>
      <ul  ref={menuRef} className='nav-menu'>
      <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">MENS</Link>{menu==="mens"?<hr/>:<></>}<span></span></li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>WOMENS</Link>{menu==="womens"?<hr/>:<></>}<span></span></li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}<span></span></li> 
      </ul>
      <hr className='line'/>
      <div className='nav-cart-count'>{getTotalCartItems}</div>

    </div>
  )
}

export default Category
