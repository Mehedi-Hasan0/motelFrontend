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

// export const getUser = () => async (dispatch) => {
//     const response = await api.post("/auth/get_user_details");
//     console.log(response.data, "GET USER DETAILS")
//     if (response.data.status === 200) {
//         dispatch({
//             type: "GET_USER_DETAILS",
//             payload: response.data.user_details
//         })
//     } else {
//         dispatch({ type: "USER_LOG_OUT" })
//     }

// }

export const getUser = () => async (dispatch, getState) => {
    const { user } = getState().user;

    if (user) {
        return;
    }

    try {
        const response = await api.post("/auth/get_user_details");
        console.log(response.data, "GET USER DETAILS");
        if (response.data.status === 200) {
            dispatch({
                type: "GET_USER_DETAILS",
                payload: response.data.user_details,
            });
        } else {
            dispatch({ type: "USER_LOG_OUT" });
        }
    } catch (error) {
        // Handle error
    }
};


export const userLogOut = () => async (dispatch) => {
    const response = await api.post("/auth/logout");
    console.log(response)
    dispatch({ type: "USER_LOG_OUT" })
}