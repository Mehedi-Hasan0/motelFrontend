const initialState = {
    newReservationsData: null,
    reservations: []
}

const reservationsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "NEW_RESERVATIONS_DATA": {
            return {
                ...state,
                newReservationsData: payload
            }
        }
        default: return state;
    }
}

export default reservationsReducer;