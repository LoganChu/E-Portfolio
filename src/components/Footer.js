import React from 'react';

const Footer = () =>{
    const year = new Date().getFullYear();
    return (
      <footer className="text-center p-3">
        © {year} Logan Chu. All rights reserved.
      </footer>
    );
}
  
  export default Footer;