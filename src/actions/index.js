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
