import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ title }) => (
    <div className="Header">
       <a href="/profile"><h1 className="white" >GOALSetter</h1></a>
      
      
      
      <h1>{title}</h1>
    </div>
  );

export default Header;