/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import React from 'react';
import ReactDom from 'react-dom/client';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import HomePage from './pages/HomePage';
import CookieConsent from 'react-cookie-consent';

function App() {
    return (
        <Router>
            <main className='container pt-5'>
                <Routes>
                    <Route path="/add-prod" element={<AddProduct />} />
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </main>

        </Router>
    )
}

const root = ReactDom.createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <App />
        <CookieConsent
            location='bottom'
            buttonText="ok"
            cookieName='ConsentCookiesUpload'
            style={{ background: "#2c2d59", zIndex: 100 }}
            buttonStyle={{background: "#ffffff", color: "#2c2d59", fontSize:"15px"}}
        >
            Ce site utilise des cookies essentiels et fonctionnels nécessaires au bon fonctionnement du site internet et qui ne peuvent pas être refusés... 
        </CookieConsent>
    </React.StrictMode>
)

