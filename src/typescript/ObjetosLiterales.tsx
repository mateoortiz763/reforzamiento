
interface Persona{
    nombre:string,
    edad: number,
    direccion: Direccion
}
interface Direccion{
    pais: string,
    casaNo: number
}


export const ObjetosLiterales = () => {

    const persona: Persona ={
        nombre:'Mateo',
        edad: 24,
        direccion: {
            pais: 'Colombia',
            casaNo:48
        }
    }

    return (
        <>
            <h3>
                ObjetosLiterales
            </h3>
            <code>
                <pre>
                    {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </>
    )
}
