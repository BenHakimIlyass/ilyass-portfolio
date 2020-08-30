import React from "react";

type Props = [{ onMouseEnter: () => void; onMouseLeave: () => void }, boolean];

export default (initialState?: boolean): Props => {
  const [isHovered, hover] = React.useState(!!initialState);
  const handleHover = () => ({
    onMouseEnter: () => hover(true),
    onMouseLeave: () => hover(false),
  });
  return [handleHover(), isHovered];
};
