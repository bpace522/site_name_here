import {useState} from 'react'
import './Header.css'
import injuredEmoji from '../assets/injuried-svgrepo-com.svg'

function Header() {
    return (
        <header>
            <div className='header'>
                <img src={injuredEmoji} className='injury' alt='Injured Man Emoji'></img>
            </div>
        </header>
    )
}

export default Header