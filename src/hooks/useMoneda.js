import React, {Fragment,useState} from 'react';

const useMoneda = (label) => {
    
    //State del custom hook
    const[state,actualizarState] = useState('');

    const Seleccionar = () =>(
        <Fragment>
            <label>{label}</label>
            <select>
                <option value=''> --Seleccione</option>
                <option value="Q">Quetzal Guatemlateco</option>
            </select>
        </Fragment>
    );

    //retornar state, interfaz y funcionque modifica el state
    return [state,Seleccionar,actualizarState];  
}

export default useMoneda;

