import api from "../../backend"

/* eslint-disable no-undef */
export const createNewHouse = (structure, privacyType, location, floorPlan, amenitiesData, housePhoto) => async (dispatch) => {
    console.log(structure)
    let newHouseData = {
        houseType: structure,
        privacyType: privacyType,
        location: location,
        floorPlan: floorPlan,
        amenities: amenitiesData,
        photos: housePhoto
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

export const saveLocation = (locationData) => async (dispatch) => {
    try {
        const res = await api.post("/house/save_house_location", locationData, {
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

export const saveFloorPlan = (floorPlanData) => async (dispatch) => {
    try {
        const res = await api.post("/house/save_floor_plan", floorPlanData, {
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

export const saveAmenities = (amenitiesData) => async (dispatch) => {
    try {
        const res = await api.post("/house/save_amenities", amenitiesData, {
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

export const savePhotos = (photosData) => async (dispatch) => {
    try {
        const res = await api.post("/house/save_photos", photosData, {
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