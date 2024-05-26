import React from 'react'
import "./popular.css";
import data_product from '../assets/data';
import Item from '../items/item';

const popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className='popular-item'>
        {data_product.map((item,j)=>{
          
            return(
            <div className='item'>
             <Item key={j} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>
             </div>
       ) })}
      </div>
    
    </div>
  )
}

export default popular
