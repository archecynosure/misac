import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };

    return (
        <div className="product">
            <img src={image}
                alt="" />
            < div className="product__info" >
                < p > {title} </p>
                <p className="product__price" >
                    <small>RSD</small> {price}
                </p>
            </div >

            <button onClick={addToBasket}>Dodaj u korpu </button>

        </div>
    )
}

export default Product
