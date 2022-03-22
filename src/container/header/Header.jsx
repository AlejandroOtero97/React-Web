import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Welcome to my new React Project.
        </h1>
        <p>Hello! I am Alejandro Gabriel Otero, from Buenos Aires, Argentina.
          I am 24 years old and I am currently a Web Developer with knowledge
          in Html5, Css3, Bootstrap, Sass and Javascript.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Put your email here"/>
          <button type='button'>Contact Me!</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
