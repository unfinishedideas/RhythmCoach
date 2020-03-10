const accuracyReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_ACCURACY':
            return action.payload;
        default:
            return state;
    }
}

export default accuracyReducer;