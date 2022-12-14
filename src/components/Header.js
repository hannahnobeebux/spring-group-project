import React from 'react';
import { HeaderOne } from '../globalStyles'
import '../App.css'


export default function Header () {
    return (
        <div  className="header">
            {/* <h1>Hello World</h1> */}
            <HeaderOne className='title'>SimpliShop</HeaderOne>
            <button className='logout_btn'>Log Out</button>
            <p className='useremail'>example@example.com</p>
        </div>
    )
}