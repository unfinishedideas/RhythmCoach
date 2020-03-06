const targetingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_TARGET':
            return action.payload;
        default:
            return state;
    }
}

export default targetingReducer;