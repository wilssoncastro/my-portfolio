import React from 'react'
import { CTA } from './CTA'
import './header.css'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Wilson Castro</h1>
        <h5 className="text-colors">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header