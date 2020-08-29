import React from "react";

type Props = {
  max?: number;
  min?: number;
};
type Dist = { scroll: number; isOnScreen: boolean; isScrolling: boolean };
// A hook for tracking vertical scroll
export default ({ min, max }: Props): Dist => {
  const [scroll, setScroll] = React.useState<number>(0);
  const [isScrolling, setScrolling] = React.useState<boolean>(false);

  // check if the screen scroll match the min and max
  const isOnScreen = (): boolean =>
    typeof max === "number" &&
    typeof min === "number" &&
    scroll >= min &&
    scroll < max;

  React.useEffect(() => {
    const handleScroll = (e: any): void =>
      setScroll(e.target.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setScrolling(true);
    let timeout = setTimeout(() => setScrolling(false), 100);
    return () => clearTimeout(timeout);
  }, [scroll]);

  return { scroll: scroll, isOnScreen: isOnScreen(), isScrolling: isScrolling };
};
