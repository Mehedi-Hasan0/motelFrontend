const initialState = {
    newHouse: null,
    currentListingHouse: null,
    housesData: []
}

const houseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "CREATE_NEW_HOUSE":
            return {
                ...state,
                newHouse: payload
            }
        case "SAVE_HOUSE_DATA":
            return {
                ...state,
                housesData: payload
            }
        case "CURRENT_NEW_HOUSE":
            return {
                ...state,
                currentListingHouse: payload
            }
        default:
            return state
    }

}

export default houseReducer