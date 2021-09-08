import { createContext, useState, useContext } from "react";

const MainPrequeryContext = createContext();

export const MainPrequeryProvider = (props) => {
  const [prequery, setPrequery] = useState("");

  return (
    <MainPrequeryContext.Provider value={{ prequery, setPrequery }}>
      {props.children}
    </MainPrequeryContext.Provider>
  );
};
export const PrequeryContext = createContext();

export const PrequeryProvider = (props) => {
  const { prequery } = useContext(MainPrequeryContext);
  return (
    <PrequeryContext.Provider value={prequery}>
      {props.children}
    </PrequeryContext.Provider>
  );
};

export const SetPrequeryContext = createContext();

export const SetPrequeryProvider = (props) => {
  const { setPrequery } = useContext(MainPrequeryContext);
  return (
    <SetPrequeryContext.Provider value={setPrequery}>
      {props.children}
    </SetPrequeryContext.Provider>
  );
};
