import React from 'react'

export const TiposBasicos = () => {

    const nombre: string = 'Mateo';
    const edad: number = 24;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad, Volar, Respiración en el agua'];
    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'Verdadero' : 'Falso'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
