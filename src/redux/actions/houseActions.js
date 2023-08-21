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

export const saveStructure = (houseStructure) => async (duspatch) => {
    try {
        const res = await api.post("/house/save_structure", houseStructure, {
            headers: { "Content-Type": "application/json" }
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

// export const saveStructure = ()