import React from 'react';
import fondo from '../imagenes/fondo.jpg';

export const Contenido = () => {
    return (
        <div className='contenedor-principal'>

            <div className='contenedor'>
                <img
                    src={fondo}
                    alt='Imagen'
                    className='imagen-mujer'
                />
                <div className='circulo-blanco'>

                </div>
                <div className='contenido-derecho'>
                    <div className='recuedro-radius'>
                        <div className='recuadroh5'>
                            <h5>DOG PSYCHOLOGY</h5>
                        </div>
                        <div className='recuadro-h2'>
                            <h2>Dogs are playful, sociable animals</h2>
                        </div>
                        <div className='recuadro-parrafo-principal'>
                            <p>Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Eget nunc scelerisque viverra mauris in aliquam sem fringilla.</p>
                        </div>
                        <div className='recuadro-freepik'>
                            <p>Image by Freepik</p>
                        </div>
                        <div className='boton-read-more'>
                            <button className='read-more'>READ MORE</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
