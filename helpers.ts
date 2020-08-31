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
  max: max ? makeMax(max) : makeMax(coefficient),
});

// switch background color
export const handleBackgroundColor = (toggle: boolean, scroll: number) =>
  toggle
    ? "#fff"
    : scroll >= makeMax(8.3)
    ? "#fff"
    : scroll >= makeMax(7.3)
    ? "#000"
    : scroll >= makeMax(2.3)
    ? "#fff"
    : scroll >= makeMax(1)
    ? "#4D3BD8"
    : scroll >= makeMax(0)
    ? "#614FE7"
    : scroll >= 0
    ? "#8E82EE"
    : "#000";

// switch background color
export const handleIndicatorColor = (toggle: boolean, scroll: number) =>
  toggle
    ? "#000"
    : scroll >= makeMax(8.3)
    ? "#4D3BD8"
    : scroll >= makeMax(7.3)
    ? "#fff"
    : scroll >= makeMax(2.3)
    ? "#4D3BD8"
    : scroll >= makeMax(1)
    ? "#fff"
    : scroll >= makeMax(0)
    ? "#fff"
    : scroll >= 0
    ? "#fff"
    : "#fff";
