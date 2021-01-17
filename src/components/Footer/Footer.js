import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
  <div class="footer">
   <footer>
      <div>
        Coded With Love By 
        <span>
          <Link className="footer-pink" to="/about"> Echo</Link>
        </span>
        . Jan 2021.
      </div>
   </footer>
  </div>
  );
};

export default Footer;
