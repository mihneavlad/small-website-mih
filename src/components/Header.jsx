import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => (

  <Header>
  <h1>Mihnea's Website</h1>
  <nav>
    <ul>
      <li><Link to="./home">Home</Link></li>
      <li><Link to="./about">About</Link></li>
      <li><Link to="./contact">Contact</Link></li>
    </ul>
  </nav>
  </Header>
)

export default Header;
