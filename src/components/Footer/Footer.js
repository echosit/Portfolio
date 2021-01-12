import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
  <div class="footer">
   <footer>
      <p>
        Coded With Love By 
        <span>
          <Link className="footer-pink" to="/about"> Echo</Link>
        </span>
        . Last Updated Jan 2021.
      </p>
   </footer>
  </div>
  );
};

export default Footer;
