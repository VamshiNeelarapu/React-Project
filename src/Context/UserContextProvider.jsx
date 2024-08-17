import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = (props) => {
  const [userName, setUserName] = useState(null);

  <UserContext.Provider value={{ userName, setUserName }}>
    {props.children}
  </UserContext.Provider>;
};

export default UserContextProvider;
