// utils
const makeDistance = (coefficient: number) => 500 * coefficient;
const makeGap = (coefficient: number) => 700 * coefficient;

// return 0 or a gap
export const makeMin = (coefficient: number) =>
  coefficient === 0 ? 0 : makeDistance(coefficient) + makeGap(coefficient);

// return a distance from min
export const makeMax = (coefficient: number) =>
  coefficient === 0
    ? makeDistance(coefficient + 1)
    : makeMin(coefficient) + 500;

// wrap props
export const makeProps = (coefficient: number, max?: number) => ({
  min: makeMin(coefficient),
  max: max ? makeMax(max) : makeMax(coefficient)
});
