import { useEffect, useRef, useState } from "react";
import { reqResAPi } from "../api/reqRes";
import { Usuario, ReqResListado } from '../interfaces/reqRes';


export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);


    useEffect(() => {
        //Llamada de la API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResAPi.get<ReqResListado>('/users', { 
            params: { 
                page: paginaRef.current
            } 
        })
        if (resp.data.data.length>0) {
            setUsuarios(resp.data.data)            
            
        } else{
            paginaRef.current--;
            alert('No hay más registros');
        }
    }

    const paginaSigueinte = () =>{
        paginaRef.current++;
        cargarUsuarios();
    }
    const paginaAnterior = () =>{
        if (paginaRef.current>1) {
            paginaRef.current--;
            cargarUsuarios();            
        }
    }

    return{
        usuarios,
        paginaAnterior,
        paginaSigueinte,
    }


}
