import React,{useContext} from 'react'
import "./css/shopcategory.css"
import { ShopContext } from '../context/shopcontext'
//import dropdown_icon from "../components/assets/dropdown_icon.png"
import Item from '../components/items/item'
import all_product from '../components/assets/all_product'

const  ShopCategory=(props) => {
 const {all_product} = useContext (ShopContext);
 //console.log(all_product);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' scr={props.banner} alt=""/>
      <div className='shopcategory-indexsort'>
        {/* <p>
          <span>showing 1-12</span>out of 36 products
        </p> */}
        {/* <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt=""/>
        </div> */}
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
             return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
          }
          else{
            return null;
          }
          
        })}
      </div>
      <div className='shopcategory-loadmore'>
        EXPLORE MORE
      </div>
    </div>
  );
};

export default ShopCategory;
