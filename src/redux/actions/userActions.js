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


export const getUser = () => async (dispatch, getState) => {
    const { userDetails } = getState().user;

    if (userDetails) {
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
        console.log(error)
    }
};

export const userRole = () => async (dispatch, getState) => {
    const { userDetails } = getState().user;

    if (userDetails?.role === "host") {
        console.log("already a hoast")
    }

    try {
        const response = await api.post("/auth/become_a_host", { role: "host" });
        console.log(response)
        if (response.data.succeed === 1) {
            dispatch({
                type: "CHANGE_USER_ROLE",
                payload: response.data.updatedUserDetails
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const userLogOut = () => async (dispatch) => {
    const response = await api.post("/auth/logout");
    console.log(response)
    dispatch({ type: "USER_LOG_OUT" })
}