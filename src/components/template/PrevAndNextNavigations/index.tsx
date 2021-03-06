import React from "react";

import {
  NavigationBeforeSvg,
  NavigationNextSvg,
} from "components/parts/svgIcons";

import Navigation from "./Navigation";

interface OwnProps {
  prevNavigation: Omit<React.ComponentProps<typeof Navigation>, "children">,
  nextNavigation: Omit<React.ComponentProps<typeof Navigation>, "children">,
  size?: number
}

type Props = OwnProps;

const PrevAndNextArrow: React.FC<Props> = (props) => {
  const {
    children,
    prevNavigation,
    nextNavigation,
    size,
  } = props;

  const svgSize = size ?? 40;

  return (
    <React.Fragment>
      <section
        id="prev-next-navigations"
        className="flex items-center justify-between py-2 px-2"
      >
        <Navigation {...prevNavigation}>
          <NavigationBeforeSvg size={svgSize} />
        </Navigation>
        {children}
        <Navigation {...nextNavigation}>
          <NavigationNextSvg size={svgSize} />
        </Navigation>
      </section>
    </React.Fragment>
  );
};

export default PrevAndNextArrow;