import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader"
import useScreenSize from "../../hooks/useScreenSize";

const Header = () => {
  const screen = useScreenSize();
  return screen.isXSmall ? (
    <MobileHeader isLoggedIn={true} />
  ) : (
    <DesktopHeader />
  );
};
export default Header;
