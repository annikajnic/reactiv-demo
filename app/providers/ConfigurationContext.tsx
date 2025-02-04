import { CONFIGURATION_OPTIONS } from "@/constants/Configurations";
import { createContext } from "react";
import ConfigurationProvider from "./ConfigurationProvider";

interface ConfigurationContext {
  configurationPath: string;
  setConfigurationPath: (value: string) => void;
}

const defaultValue: ConfigurationContext = {
  configurationPath: CONFIGURATION_OPTIONS[0].path,
  setConfigurationPath: () => {},
};

export default createContext<ConfigurationContext>(defaultValue);
