import React from 'react'
import Notice from './Notice';
import Msp from './Msp'
import './MainComponent.css'
import Mss from'./Mss';

export const MainComponent = () => {
    return (
        
            <>
            <div className='mmC'>
            <Notice/>
            </div>
            <div className='mmP'>
            <h1>Most Selling Product</h1>
            <Msp/>
            </div>
            <div className='mmP'>
            <h1>Most Reviewd Product</h1>
            <Msp/>
            </div>
            <div className='mmP'>
            <h1>Most Reviewd Shop</h1>
            <Msp/>
            </div>
            <div className='mmP'>
            <h1>Review From Our customer</h1>
            <Mss/>
            </div>
            </>
         
        
    )
}
