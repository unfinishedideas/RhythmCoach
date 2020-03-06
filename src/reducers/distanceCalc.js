const distanceReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_DISTANCE':
            return action.payload;
        default:
            return state;
    }
}

export default distanceReducer;