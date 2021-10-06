import { createContext, useState, useContext } from "react";

const MainPageNumberContext = createContext();

export const MainPageNumberProvider = (props) => {
  const [pageNumber, setPageNumber] = useState("1");

  const incrementPageNumber = (mode = null) => {
    if (mode === "reset") {
      setPageNumber("1");
    } else {
      setPageNumber((parseInt(pageNumber) + 1).toString());
    }
  };

  return (
    <MainPageNumberContext.Provider value={{ pageNumber, incrementPageNumber }}>
      {props.children}
    </MainPageNumberContext.Provider>
  );
};
export const PageNumberContext = createContext();

export const PageNumberProvider = (props) => {
  const { pageNumber } = useContext(MainPageNumberContext);
  return (
    <PageNumberContext.Provider value={pageNumber}>
      {props.children}
    </PageNumberContext.Provider>
  );
};

export const SetPageNumberContext = createContext();

export const SetPageNumberProvider = (props) => {
  const { incrementPageNumber } = useContext(MainPageNumberContext);
  return (
    <SetPageNumberContext.Provider value={incrementPageNumber}>
      {props.children}
    </SetPageNumberContext.Provider>
  );
};
