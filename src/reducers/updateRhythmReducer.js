const updateRhythmReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_RHYTHM':
            return action.payload;
        default:
            return state;
    }
}

export default updateRhythmReducer;