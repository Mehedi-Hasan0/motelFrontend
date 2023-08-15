const initialState = {
    newHouse: null
}

const houseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "CREATE_NEW_HOUSE":
            return {
                newHouse: payload
            }
        default:
            return state
    }

}

export default houseReducer