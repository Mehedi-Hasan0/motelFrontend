import api from "../../backend";

/* eslint-disable no-undef */
// export const userSignUp = () => async (dispatch) => {
//     dispatch({
//         type: "USER_SIGN_UP",
//         payload:
//     })
// }

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