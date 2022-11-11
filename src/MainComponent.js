import React from 'react';
import './index.css';
import group from './Group.png'

export default function MainComponent(){
    return(
    <div className="wrapper">
        <div className='main-container'>
            <h1>Fun Facts about React</h1>
            <ul className='facts'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps </li>
            </ul>
            
        </div>
        <div className='image-container'>
            <img src={group} width="120px"  />
        </div>
    </div>
    )
}