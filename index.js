function isValidWalk(walk) {
  const isReturnToStartPoint = isWalkReturnToStartPoint(walk);
  if (walk.length === 10 && isReturnToStartPoint) return true;
  else return false;
}

const walkValuesMap = {
  n: 1,
  s: -1,
  e: 1,
  w: -1,
};

function isWalkReturnToStartPoint(walk) {
  const isReturnToVerticalStartPoint =
    walk.reduce(
      (acc, value) =>
        ['n', 's'].includes(value) ? acc + walkValuesMap[value] : acc,
      0
    ) === 0;
  const isReturnToHorizontalStartPoint =
    walk.reduce(
      (acc, value) =>
        ['e', 'w'].includes(value) ? acc + walkValuesMap[value] : acc,
      0
    ) === 0;
  return isReturnToVerticalStartPoint && isReturnToHorizontalStartPoint;
}
