import React from 'react';
import { Contenido } from './Contenido';
import { Footer } from './Footer';
import { Aside } from './Aside';
import { Navbar } from './Navbar';


const DogPage = () => {
    return (
        <div>
            <Navbar />
            <Contenido />
            <Aside />
            <Footer />
        </div>
    )
}

export default DogPage