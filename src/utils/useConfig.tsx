import React, { useContext, useState } from "react";
import { defaultConfig, DynamicConfig } from "../models";

interface DynamicConfigContext {
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

const ConfigContextProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [configState, setConfigState] = useState(defaultConfig);

  return (
    <configContextObject.Provider
      value={{
        config: configState,
        setConfig: setConfigState
      }}
    >
      {children}
    </configContextObject.Provider>
  );
};

export default ConfigContextProvider;
