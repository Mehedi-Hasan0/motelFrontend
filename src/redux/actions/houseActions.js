/* eslint-disable no-undef */
export const createNewHouse = (structure, privacyType, location) => async (dispatch) => {
    console.log(structure)
    let newHouseData = {
        houseType: structure,
        privacyType: privacyType,
        location: location
    }

    dispatch({
        type: "CREATE_NEW_HOUSE",
        payload: newHouseData
    })
}