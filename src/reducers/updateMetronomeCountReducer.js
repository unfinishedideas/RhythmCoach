const updateMetronomeCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_METRONOME_COUNT':
            return action.payload;
        default:
            return state;
    }
}

export default updateMetronomeCountReducer;