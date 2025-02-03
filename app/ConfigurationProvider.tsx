import { CONFIGURATION_OPTIONS } from "@/constants/Configurations";
import { useState } from "react";
import { ConfigurationContext } from "./providers/ConfigurationContext";

interface Props {
  children: React.ReactNode;
  pathValue: string;
}

const ConfigurationProvider: React.FC<Props> = ({ children, pathValue }) => {
  const [configurationPath, setConfigurationPath] = useState(pathValue);
  return (
    <ConfigurationContext.Provider
      value={{ configurationPath, setConfigurationPath }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

export default ConfigurationProvider;
