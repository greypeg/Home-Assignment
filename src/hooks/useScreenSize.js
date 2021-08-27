import { useMemo } from "react";

import useWindowWidth from "./useWindowWidth";

const breakpoints = {
  xSmall: 0,
  small: 500,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xXLarge: 1400,
};

const getViewportsByWidth = (width) => ({
  isXSmall: width < breakpoints.small,
  isSmall: width >= breakpoints.small && width < breakpoints.medium,
  isMedium: width >= breakpoints.medium && width < breakpoints.large,
  isLarge: width >= breakpoints.large && width < breakpoints.xLarge,
  isXLarge: width >= breakpoints.xLarge && width < breakpoints.xXLarge,
  isXXLarge: width >= breakpoints.xXLarge,
});

const useScreenSize = () => {
  const width = useWindowWidth();

  return useMemo(() => {
    const viewports = getViewportsByWidth(width);

    return {
      width,

      ...viewports,

      isSmallScreen: viewports.isXSmall,
      isMediumScreen: viewports.isSmall || viewports.isMedium,
      isLargeScreen:
        viewports.isLarge || viewports.isXLarge || viewports.isXXLarge,
    };
  }, [width]);
};

export default useScreenSize;
