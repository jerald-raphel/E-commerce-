import React from 'react'
import "./newcollections.css"
//import new_collections from '../../images/Newcollections'
import new_collections from "../assets/new_collections"
import Item from '../items/item'

const newcollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIoNS</h1>
      <hr/>
      <div className='collections'>
        {new_collections.map((item,i)=>{
           return (
            <div className='collection'> 
           <Item key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           </div>
        )})}
      </div>
    </div>
  )
}

export default newcollections;
