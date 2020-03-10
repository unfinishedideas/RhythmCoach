const metronomeReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_METRONOME':
            return action.payload;
        default:
            return state;
    }
}

export default metronomeReducer;