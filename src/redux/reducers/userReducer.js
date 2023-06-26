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
                responseMessage: payload.data.message
            }
        default:
            return state
    }
}

export default userReducer;