import { addSocAsync } from './Socios/socio.actions';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

// aca defino las fn

export const useGetSocios = () => {

    const dispatch = useDispatch()

    // const urlGetSoc = 'http://localhost:5001/api/products'
    const urlGetSoc = './data/socios.json'


    useEffect(() => {
        return async () => {
            console.log("me ejecuto")
            const response = await fetch(urlGetSoc)
            console.log({ response})
            const responseJSON = await response.json()
            console.log(responseJSON)
            responseJSON.data.forEach(socio => {
                dispatch(addSocAsync(socio));
            });
        }
    }, [dispatch])
}

export const addSocio = (socio) => {
    return async (dispatch) => {
        try {
            const response = await fetch(process.env.REACT_APP_URL, {
                method: 'POST',
                body: JSON.stringify(socio),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log({data})
            // Si sale todo OK, se agrega el socio al estado y se actualiza la tabla
            dispatch(addSocAsync(data));
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}