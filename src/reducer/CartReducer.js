
const CartRreducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // tackle the existing product 
    let existingProduct = state.cart.find((currItem) => currItem.id === id + color)
    existingProduct = JSON.stringify(existingProduct)
    console.log(JSON.stringify(existingProduct), 'existing products')
    if (existingProduct) {
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id === id + color) {
          let newAmount = currElem.amount + amount;
          if (newAmount >= currElem.max) {
            newAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: newAmount
          }
        } else {
          return currElem
        }

      })
      return {
        ...state,
        cart: updatedProduct
      }
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      }

      // console.log('CaartReducer line 6 ',product,amount)
      return {
        ...state,
        cart: [...state.cart, cartProduct]
      }
    }
  }
  // set Icrement and Decrement 
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >=curElem.max) {
          incAmount =curElem.max ;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updateCart = state.cart.filter((curItem) => curItem.id !== action.payload)
    return {
      ...state,
      cart: updateCart,
    }
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: []
    }
  }
  // if(action.type === 'CART_TOTAL_ITEM')
  // {
  //   let updatedItemVal = state.cart.reduce((accumulator,curElem)=>{
  //     let {amount}=curElem;
  //     accumulator=accumulator + amount;

  //      return accumulator
  //   },0)
  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   }
  // }

       
  //       if(action.type === 'CART_TOTAL_PRICE'){
  //         let total_price=state.cart.reduce((accumulator,curElem)=>{
  //           let {price ,amount}=curElem;
  //           accumulator=accumulator +(price*amount);
  //           return accumulator
  //         },0)
  //         return {
  //           ...state,
  //           total_price ,  //in ES6 if the key and value are same ten dnt need to write like total_price : total_price
  //         }
  //       }
       
      // code simplyfied  
      if(action.type === 'CART_ITEM_PRICE_TOTAL'){
        let {total_item,total_price}=state.cart.reduce((accumulator,curElem)=>{
          let {price,amount} =curElem;
          accumulator.total_item += amount;
          accumulator.total_price  += price*amount;
          return accumulator
        },{total_item:0,
        total_price:0})
        return {
          ...state,
          total_item,
          total_price      }
      }
      // if (action.type === "CART_ITEM_PRICE_TOTAL") {
      //   let { total_item, total_price } = state.cart.reduce(
      //     (accum, curElem) => {
      //       let { price, amount } = curElem;
    
      //       accum.total_item += amount;
      //       accum.total_price += price * amount;
    
      //       return accum;
      //     },
      //     {
      //       total_item: 0,
      //       total_price: 0,
      //     }
      //   );
      //   return {
      //     ...state,
      //     total_item,
      //     total_price,
      //   };
      // }
  return state
}
export default CartRreducer
