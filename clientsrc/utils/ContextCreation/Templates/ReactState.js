export default function ReactState(contextName) {
  return `import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";
import GenerateRequestOptions from "../../../utils/GenerateRequestOptions";
import { AccountContext } from "../Auth/Accounts";

import ${contextName}Reducer from "./${contextName}Reducer";

const initialState = {
  item: {},
  items: [],
  error: null,
};

export const ${contextName}Context = createContext(initialState);

export const ${contextName}Provider = ({ children }) => {
  const [state, dispatch] = useReducer(${contextName}Reducer, initialState);
  const { getSession } = useContext(AccountContext);

  async function getItems() {
    try {
      let token = await getSession().session.header.Authorization;
      const options = await GenerateRequestOptions("get", "items", token, {});
      let res = await axios(options);
      dispatch({
        type: "GET_ITEMS",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "ITEM_ERROR",
        payload: error,
      });
    }
  }

  return (
    <${contextName}Context.Provider
      value={{
        items: state.items,
        getItems,
      }}
    >
      {children}
    </${contextName}Context.Provider>
  );
};  
  
  `;
}
