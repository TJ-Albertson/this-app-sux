import React, { useState, useEffect } from 'react';
import './CSS/NavBar.css'

export default function NavBar(props) {

    function log() {
        const data = fetch('http://localhost:5000/test').then(response => response.json())
        return data
    }
    
    fetch('http://localhost:5000/test2', {credentials: 'include', mode: 'cors'})
        .then(response => response.json())
        .then(data => console.log(data));

    
    function test() {
        return 'text'
    }

    return (
        <div>

            <ul className='List'>
                
                <li className='NavLeft'>
                    <a className='Link'>Home</a>
                </li>

                <li className='NavRight'>
                    <a className='Link' href='http://localhost:5000/auth/auth0'>
                        {props.isLoggedIn ? 'Login' : 'Logout'}
                    </a>
                </li>

                <li className='NavRight'>
                    <a className='Link'>Settings</a>
                </li>

                <li className='NavRight'>
                    <a className='Link'>{test()}</a>
                </li>
                
            </ul>

        </div>
    )
}