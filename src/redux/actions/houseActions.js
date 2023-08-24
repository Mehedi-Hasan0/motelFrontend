import api from "../../backend"

/* eslint-disable no-undef */
export const createNewHouse = (structure, privacyType, location, floorPlan, amenitiesData) => async (dispatch) => {
    console.log(structure)
    let newHouseData = {
        houseType: structure,
        privacyType: privacyType,
        location: location,
        floorPlan: floorPlan,
        amenities: amenitiesData
    }

    dispatch({
        type: "CREATE_NEW_HOUSE",
        payload: newHouseData
    })
}

export const saveStructure = (houseStructure) => async (dispatch) => {
    try {
        const res = await api.post("/house/save_structure", houseStructure, {
            headers: { "Content-Type": "application/json" }
        })
        if (res.status === 200) {
            dispatch({
                type: "CURRENT_NEW_HOUSE",
                payload: res.data?.houseDetails
            })
        }
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const savePrivacyType = (privacyType) => async (dispatch) => {
    try {
        const res = await api.post("/house/save_privacy_type", privacyType, {
            headers: { "Content-Type": "application/json" }
        })
        if (res.status === 200) {
            dispatch({
                type: "CURRENT_NEW_HOUSE",
                payload: res.data?.houseDetails
            })
        }
        console.log(res, "line 42")
    } catch (error) {
        console.log(error)
    }
}