/* eslint-disable no-undef */
export const createNewHouse = (structure, privacyType) => async (dispatch) => {
    console.log(structure)
    let newHouseData = {
        houseType: structure,
        privacyType: privacyType
    }

    dispatch({
        type: "CREATE_NEW_HOUSE",
        payload: newHouseData
    })
}