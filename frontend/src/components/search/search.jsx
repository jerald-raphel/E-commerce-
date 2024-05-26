import React, { useState } from 'react'
import all_product from '../assets/all_product'
import { bind } from 'lodash';

const Search = () => {
  const[filter,setFilter]=useState("");
const searchText=(event)=>{
  setFilter(event.target.value);
}
let dataSearch=all_product.cardData.filter(item=>{
  return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())

    )
})

  return (
    <section className='py-4 container'>
      <div className="row justify-content-center">
        
        <div className='col-12 mb-5'>
          <div className='mb-3 col-4 mx-auto'>
            <h1>search</h1>
            <input className='from-control' type='text' value={filter} onChange={searchText.bind(this)}/>
          </div>
        </div>

         {dataSearch.map((item,index)=>{
          return(
            <div className='ol-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <img scr={item.image} className='card-img-top img-fluid'/>
            <div className='card-body'>
               <h5 className='card-category'>{item.category}</h5>
               <p className='card-price'>{item.price}</p>
            </div>
          </div>
       
          )
         })}
        
        </div>

    </section>
  )
}

export default Search
