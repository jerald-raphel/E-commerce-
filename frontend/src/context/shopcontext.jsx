
import React,{createContext, useState} from "react";



import all_product from "../components/assets/all_product";
//import { response } from "express";

export const ShopContext = createContext(null);





const getDefaultCart =()=>{
    let Cart ={};
    for(let index = 0; index < all_product.length+1; index++) {
        Cart[index]  = 0;
    }
    return Cart;
}

const ShopContextProvider = (props) => {
    
   
    const [cartItems,setCartItems] = useState(getDefaultCart()); 
    
    
    // if(localStorage.getItem('auth-token')){
    //     fetch('http://localhost:5000/getcart',{
    //         method:'POST',
    //         headers:{
    //             Accept:'application/form-data',
    //             'auth-token':`${localStorage.getItem('auth-token')}`,
    //             'Content-Type':"application/json",
    //         },
    //         body:"",
    //     }).then((data)=>setCartItems(data));
    // }


    const addToCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       if(localStorage.getItem('auth-token')){
        fetch('http://localhost:5000/addtocart',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
               'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json',

            },
            body:JSON.stringify({"itemId":itemId}),
        })
        // .then((response)=>response.json)
        // .then((data)=>console.log(data));
       }
    }
    const removeFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:5000/removefromcart',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
               'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json',

            },
            body:JSON.stringify({"itemId":itemId}),
        })
        }
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems) 
        {
           if(cartItems[item]>0)
           {
            let itemInfo= all_product.find((product)=>product.id===Number(item))
            totalAmount+=itemInfo.new_price*cartItems[item];

           }
           
        }
        return totalAmount;
    }

    const getTotalCartItems =() =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems,getTotalAmount,all_product,cartItems,addToCart,removeFromCart};
     
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

