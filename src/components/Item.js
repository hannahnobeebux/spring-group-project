import React from "react";
import placeholder from '../images/sunset.png'

export default function Item() {
    return (
        <section className="item">
            <h3>Title</h3>
            <p>Price</p>
            <img className= "image" src= {placeholder}/>
            <button className="wishlist-btn">Add to wishlist</button>
        </section>
    )
}