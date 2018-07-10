import { SET_CITY } from './../actions/index';
//reduces es una función que recive 2 parametros, un estado y una acción
export const city = (state = {}, action) => {
    //detectar cuando el action tenga un type que sea igual a city, 
    //responderemos modificando el estado.
    switch (action.type) {
        case SET_CITY:
            return action.value;
        default:
            return state;
    }
}