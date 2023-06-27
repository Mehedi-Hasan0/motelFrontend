import api from "../../backend";

/* eslint-disable no-undef */
export const userSignUp = (userData) => async (dispatch) => {
    dispatch({
        type: "USER_SIGN_UP",
        payload: userData
    })
}

export const userLogIn = (userData) => async (dispatch) => {
    console.log(userData.user_details)
    dispatch({
        type: "USER_LOG_IN",
        payload: userData
    })
}

export const userLogOut = () => async (dispatch) => {
    const response = await api.post("/auth/logout");
    console.log(response)
    dispatch({ type: "USER_LOG_OUT" })
}

export const getUser = () => async (dispatch) => {
    const response = await api.post("/auth/get_user_details");
    console.log(response, "GET USER DETAILS")
    if (response.data.status === 201) {
        dispatch({
            type: "GET_USER_DETAILS",
            payload: response
        })
    } else {
        dispatch({ type: "USER_LOG_OUT" })
    }

}