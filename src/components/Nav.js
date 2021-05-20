import React from 'react';
import {Link} from "react-router-dom";
import './components.css';

function Nav(props) {
  return (
    <div className="nav" >
      <h1>Vartotojų kartoteka</h1>
        <div>
           <div className="linkWrapper">
              <Link className="btnY" to="/upload">Naujas vartotojas</Link>
              <Link className="btnY" to="/storage">Visi vartotojai</Link>
           </div>
        </div>
    </div>
  );
}

export default Nav;