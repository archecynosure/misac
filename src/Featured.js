import React from 'react'
import './Featured.css'
import Product from './Product.js'

function Featured() {
    return (
        <div className='featured'>
        <div className="transition">
            <img className="transition__graphics" src="images/cheese.svg" alt="" />
            <h2>IZDVAJAMO IZ PONUDE</h2>
            <img className="transition__graphics" src="images/cheese.svg" alt="" />
        </div>
             <div className="featured__products" >
                    <Product id="4903850"
                        image="https://www.junglebaby.rs/files/thumbs/files/images/product/thumbs_1200/710024053_1200_1200px.jpg"
                        title="Miniland termo torba silky 500ml"
                        price={1200.00}
                         />
                    <Product id="23445930"
                        title="My baby bodi atlet Boho 62-98"
                        price={660}
                        image="https://www.junglebaby.rs/files/thumbs/files/images/product/thumbs_1200/232155001_1200_1200px.jpg" 
                        />
                    <Product id="3254354345"
                        title="Joie hranilica MIMZY SNACKER"
                        price={7800}
                        image="https://www.dexy.co.rs/files/thumbs/files/images/slike_proizvoda/thumbs_350/AL36288_350_350px.webp" 
                        />
                </div>
            
            
        </div>
    )
}

export default Featured
