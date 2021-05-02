import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";
import GenerateRequestOptions from "../../../utils/GenerateRequestOptions";
import { AccountContext } from "../Auth/Accounts";

import SensorReducer from "./SensorReducer";

const initialState = {
  item: {},
  items: [],
  error: null,
};

export const SensorContext = createContext(initialState);

export const SensorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SensorReducer, initialState);
  const { getSession } = useContext(AccountContext);

  async function getItems() {
    try {
      let token = await getSession().session.header.Authorization;
      const options = await GenerateRequestOptions("get", "sensors", token, {});
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
    <SensorContext.Provider
      value={{
        items: state.items,
        getItems,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
};
