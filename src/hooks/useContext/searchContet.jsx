import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery,input, setInput }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
