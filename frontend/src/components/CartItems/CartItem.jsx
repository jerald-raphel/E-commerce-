import React from 'react'
import "./CartItem.css"
import { useContext } from 'react'
import { ShopContext } from '../../context/shopcontext'
import remove_icon from "../assets/cart_cross_icon.png"

const CartItem = () => {

    const{  getTotalAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);


    return (
     <div className='cartitem'>
       <div className='cartitem-format-main'>
           <p>product</p>
           <p>Tittle</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>    
        </div>
        <hr/>
       {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
           return <div>
                      <div className='cartitrm-format'>
                      <img src={e.image} alt="" className='carticon-product-icon'/>
                      <p>{e.name}</p>
                      <p>₹{e.new_price}</p>
                      <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                      <p>₹{e.new_price*cartItems[e.id]}</p>
                      <img className="cartitem-remove-icon " src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                      </div>
                    <hr />
                   </div>  
          
                    
                    
        }
        return null;   
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
              <h1>Cart totals</h1>
        <div>
          <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalAmount()}</p>
          </div>
          <hr/>
          <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
          </div>
          <hr/>
          <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>₹{getTotalAmount()}</h3>
          </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
           </div>
           <div className='cartitem-promocode'>
             <p>if you hve a promo code,Enter it here</p>
             <div className='carditem-promobox'>
                <input type='text' placeholder='promo code'/>
                <button>SUBMIT</button>
             </div>
          </div>
         </div>   
       </div>
    )
    }

  export default CartItem