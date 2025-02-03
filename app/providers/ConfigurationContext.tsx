import { CONFIGURATION_OPTIONS } from "@/constants/Configurations";
import { createContext } from "react";

interface Props {
  configurationPath: string;
  setConfigurationPath: (value: string) => void;
}

const defaultValue: Props = {
  configurationPath: CONFIGURATION_OPTIONS[0].path,
  setConfigurationPath: () => {},
};

export const ConfigurationContext = createContext(defaultValue);
