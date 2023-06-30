import React, { useContext, useState } from "react";
import { defaultConfig, DynamicConfig } from "../models";

export interface DynamicConfigContext {
  config: DynamicConfig;
  setConfig: (newConfig: DynamicConfig) => void;
}

const configContextObject = React.createContext<DynamicConfigContext>({
  config: defaultConfig,
  setConfig: () => {}
});

export const useConfig = () => useContext(configContextObject);
type Props = {
    children?: React.ReactNode
  };

export const ConfigContextProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [configState, setConfigState] = useState(defaultConfig);
  const value = React.useMemo(()=>({
    config: configState,
    setConfig: setConfigState
  }), [configState,setConfigState]);
  return (
    <configContextObject.Provider
      value={value}
    >
      {children}
    </configContextObject.Provider>
  );
};