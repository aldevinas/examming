import React from 'react';
import {Link} from "react-router-dom";
import './components.css';

function Nav(props) {
    return (
        <div className="nav" >
            <h1>StoreWarehouse</h1>
            <div>
                <div className="linkWrapper">
                    <Link className="btnY" to="/upload">New Item</Link>
                    <Link className="btnY" to="/storage">All Inventory</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;