import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul>
      <NavigationItem link="/" exact="/" />
    </ul>
  );
};

export default navigationItems;
