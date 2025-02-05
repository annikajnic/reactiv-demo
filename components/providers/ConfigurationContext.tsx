import { createContext } from "react";

interface ConfigurationContext {
  configurationIndex: number;
  setConfigurationIndex: (value: number) => void;
}

const defaultValue: ConfigurationContext = {
  configurationIndex: 0,
  setConfigurationIndex: () => {},
};

export default createContext<ConfigurationContext>(defaultValue);
