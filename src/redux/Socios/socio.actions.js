import { addSocio } from "../thunks";
import { SociosActionsTypes } from "./socio.types";

export const addSoc = (socio) => {
    return async (dispatch) => {
        dispatch(addSocio(socio))
    };
};

export const addSocAsync = (socio) => {
    return {
        type: SociosActionsTypes.ADD_SOCIO,
        payload: socio
    };
};

export const editSoc = (socio) => {
    return {
        type: SociosActionsTypes.EDIT_SOCIO,
        payload: socio
    };
};

export const removeSoc = (id) => {
    return {
        type: SociosActionsTypes.REMOVE_SOCIO,
        payload: id
    };
};