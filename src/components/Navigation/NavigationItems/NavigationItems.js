import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact={true}>
        Blog
      </NavigationItem>
      <NavigationItem link="/" exact={true}>
        Liên hệ
      </NavigationItem>
      <div>count</div>
    </ul>
  );
};

export default navigationItems;
