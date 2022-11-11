import React from 'react';
import './index.css';
import logo from './react-logo.png';

export default 
function Header(){
    return(
        <div className='nav-bar'>
        <nav className='logo'>
        <img src={logo} width="60px"  />
        <h1>ReactFacts</h1>
        </nav>
        <div className='right-text'>
            <h4>React Course - Project 1</h4>
        </div>

            
        </div>
    )
}