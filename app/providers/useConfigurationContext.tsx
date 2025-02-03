import { useContext } from "react";
import { ConfigurationContext } from "./ConfigurationContext";

function useConfigurationContext() {
  return useContext(ConfigurationContext);
}

export default useConfigurationContext;
