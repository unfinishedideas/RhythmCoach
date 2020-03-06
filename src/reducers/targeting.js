const targetingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_TARGET':
            return state + 1;
        default:
            return state;
    }
}

export default targetingReducer;