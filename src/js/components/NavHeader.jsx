import React from "react";
import { useState, useEffect } from "react";
import DefaultNavbar from "./DefaultNavbar";
import ScrolledNavbar from "./ScrolledNavbar";

const NavHeader = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition > 100 ? (
        <ScrolledNavbar  />
      ) : (
        <DefaultNavbar  />
      )}
    </>
  );
};

export default NavHeader;
