const initialState = {
    userDetails: null,
    loginResponse: Number,
    responseMessage: ''
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER_SIGN_UP":
            return {
                ...state,
                userDetails: payload.data.user_details,
                loginResponse: payload.data.success,
                responseMessage: payload.data?.message
            };
        case "USER_LOG_IN":
            return {
                ...state,
                userDetails: payload.user_details,
                loginResponse: payload.success,
                responseMessage: payload.message
            };
        case "USER_LOG_OUT": {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            return {
                userDetails: null,
                loginResponse: 0,
                responseMessage: ""
            }
        }
        default:
            return state
    }
}

export default userReducer;