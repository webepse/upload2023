import React from 'react';

import { NavLink } from 'react-router-dom';

const HomePage = (props) => {
    return ( <>
        <h1>HomePage</h1>
        <NavLink className="btn btn-success" to="/add-prod">Ajouter un produit</NavLink>
    </> );
}
 
export default HomePage;