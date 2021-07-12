import React from 'react'
import "./Product.css";
import {useStateValue} from "./StateProvider";


function Product({id,title,image,price,rating}) {
   
    const [state,dispatch]=useStateValue();



    const addToBasket=()=>{
        //dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                raating:rating,
            },
        });
      

    };



    return (
        <div className="product">
            <div className="product__Info">
               
               <p>{title} </p>
               <p className="product__price">
                   <small>₹ </small>
                   <strong>{price}</strong>
               </p>
               <div className="product__rating">
                 {Array(rating).fill().map((_,i)=>(
                 <p>🌟</p>
                 ))

                 }


               </div>
             </div>
        <img src={image}></img>

        <button onClick={addToBasket}>Add To Basket</button>

        </div>
    )
}

export default Product
