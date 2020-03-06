export const changeCurrentTarget = (targetTicks) => {
    return{
        type: 'UPDATE_TARGET',
        payload: targetTicks
    };
};