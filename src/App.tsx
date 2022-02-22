import React from 'react';
import './App.css';
import { MainSection } from './modules/main';
import { Products } from './modules/products';
import { Advantages } from './modules/advantages';
import { About } from './modules/about';
import { Contact } from './modules/contact';

function App() {
    return (
        <>
            <MainSection />
            <Products />
            <Advantages />
            <About />
            <Contact />
        </>
    );
}

export default App;
