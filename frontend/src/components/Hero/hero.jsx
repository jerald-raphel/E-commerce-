import React, { useState } from 'react'
import './hero.css';
import hand_icon from '../assets/hand_icon.png'
//import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import all_product from '../assets/all_product';

const Hero = () => {
  
  const latest=()=>{
    alert('please subscribe to see latest collection');

  }  
  //const [value,setvalue]= useState("");
  //const onChange = (e)=>{
   //setvalue(e.target.value);
  //}
  //const onSearch=(searchTerm)=>{
   //setvalue(searchTerm);
   //console.log("search",searchTerm);
  //}
  return (
    <div className='hero'> 
    {/*<div className='search-right'>
      <h1 className='search-right-start'>search</h1>
      <div className='input'>
         <input type="text" value={value} onChange={onChange}/>
         <button onClick={()=>onSearch(value)}>search</button>
      </div>
      <div className='dropdown'>
         {all_product.filter(item =>{
            const searchTerm= value.name();
            const fullname=item.full_name.name();
            return searchTerm && fullname.startsWith(searchTerm) && fullname !==searchTerm;
         }).slice(0,10)
         .map((item)=>(
            <div onClick={()=>onSearch(item.full_name)} 
            className="dropdown-row"
            key={item.full_name}
            >{item.full_name}
             
            </div>
            ))}
         </div>
         </div>*/}
       <div className='hero-left'>
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
             <div className='hand-hard-icon'>
                <p>new</p>
                <img src={hand_icon} alt=""/>
             </div>
             <p>collection</p>
             <p>for every one</p>
          </div>
          <div className='hero-latest-btn'>
          <button onClick={latest}>latest collection </button>
          </div>
       </div>
       <div className='hero-right'>
          <img src={hero_image} alt=""/>
       </div>
    </div>
  )
}

export default Hero
