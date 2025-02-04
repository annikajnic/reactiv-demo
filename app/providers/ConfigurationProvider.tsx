import { useState } from "react";
import ConfigurationContext from "./ConfigurationContext";

interface Props {
  children: React.ReactNode;
  index: number;
}

const ConfigurationProvider: React.FC<Props> = ({ children, index }) => {
  const [configurationIndex, setConfigurationIndex] = useState(index);
  return (
    <ConfigurationContext.Provider
      value={{ configurationIndex, setConfigurationIndex }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

export default ConfigurationProvider;
