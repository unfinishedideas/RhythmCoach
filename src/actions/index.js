export const changeCurrentTarget = targetTicks => {
  return {
    type: "UPDATE_TARGET",
    payload: targetTicks
  };
};

export const updateTargetDistance = distanceTicks => {
  return {
    type: "UPDATE_DISTANCE",
    payload: distanceTicks
  };
};

export const updateAccuracy = differenceTicks => {
  return {
    type: "UPDATE_ACCURACY",
    payload: differenceTicks
  }
}

export const metronomeSwitch = toggleSwitch => {
  return {
    type: "TOGGLE_METRONOME",
    payload: toggleSwitch
  }
}