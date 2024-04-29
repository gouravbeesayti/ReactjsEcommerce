import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer'
const CartContext = createContext()
const getLocalCartData=()=>{
    let LocalCartData = localStorage.getItem("gouravCart");
    // if(LocalCartData === null){
    //     return [];
    // }else{
    //     return JSON.parse(LocalCartData);
    // }
    const parsedData = JSON.parse(LocalCartData);
    if(!Array.isArray(parsedData)) return []
    return parsedData
}
const initialState={
    // cart:[],
    cart: getLocalCartData(),
    total_item:"",
    total_price:'',
    shipping_fees:50000,
}
const CartProvider =({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)
    const addtoCart=(id,color ,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color ,amount,product}})
           
    }
    // increment and decrement products 
    const setDecrease=(id)=>{
        dispatch({type:'SET_DECREMENT', payload:id})
    }
    const setIncrement=(id)=>{
        dispatch({type:'SET_INCREMENT', payload:id})
    }


    const removeItem =(id)=>{
        dispatch({type:"REMOVE_ITEM", payload:id})
    }
    
    
    // to add data in local storage 
    //get vs set
     useEffect(()=>{
        // dispatch({type:'CART_TOTAL_ITEM'})
        // dispatch({type:'CART_TOTAL_PRICE'})
        dispatch({type: 'CART_ITEM_PRICE_TOTAL'})
        localStorage.setItem('gouravCart',JSON.stringify(state.cart))
    },[state.cart])

    // to clear the cart 
    const clearCart=()=>{
         dispatch({type:'CLEAR_CART'})
    }
    return <CartContext.Provider value={{...state,addtoCart,removeItem,clearCart,setDecrease,setIncrement}}>
        {children}
    </CartContext.Provider>
}
const useCartContext =()=>{
    return useContext(CartContext)
}
export {CartProvider,useCartContext}