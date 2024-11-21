import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
      Welcome to GERICHT, where every dish is a masterpiece and every bite tells a story. 
      Whether you're savoring a classic favorite or discovering something fresh and exciting, we're here to take your palate on a journey. 
      Join us in chasing the new flavor and experience the key to fine dining, where every moment is made to be enjoyed.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />

    </div>
  </div>
);

export default Header;
