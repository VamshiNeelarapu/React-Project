import React, { useState } from "react";
import MenuContext from "./MenuContext";

const MenuContextProvider = (props) => {
  const [selectedMenu, setSelectedMenu] = useState("Shop");
  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
