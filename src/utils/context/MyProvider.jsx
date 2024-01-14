
import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("default value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
