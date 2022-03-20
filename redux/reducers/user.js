const initialState = {
    userAll: {},
    isLoading: false,
    isError: false,
    errorMsg: '',
    errMsg: '',
    successMsg: ''
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_PENDING': {
            state.error = false
            state.isLoading = true
            return { ...state }
        }
        case 'GET_USER_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.userAll = data.results
            return { ...state }

        }
        case 'GET_USER_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default user