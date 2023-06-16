import { SociosActionsTypes } from "./socio.types";

const INITIAL_STATE = {
    socios: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SociosActionsTypes.ADD_SOCIO:
            return {
                socios: [...state.socios, action.payload]
            };

        case SociosActionsTypes.EDIT_SOCIO:
            const updSocDetail = action.payload;
            const updSoc = state.socios.map((socio) => {
                if (socio.id === updSocDetail.id) {
                    return updSocDetail;
                } else {
                    return socio;
                }
            });
            return { socios: updSoc };

        case SociosActionsTypes.REMOVE_SOCIO:
            return {
                socios: state.socios.filter((socio) => {
                    return socio.id !== action.payload;
                })
            };

        default: return state;
    }
};

export default reducer; 