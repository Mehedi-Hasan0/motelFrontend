const initialState = {
    newHouse: null,
    housesData: []
}

const houseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "CREATE_NEW_HOUSE":
            return {
                newHouse: payload
            }
        case "SAVE_HOUSE_DATA":
            return {
                ...state,
                housesData: payload
            }
        default:
            return state
    }

}

export default houseReducer