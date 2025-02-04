import { useContext } from "react";
import ConfigurationContext from "../app/providers/ConfigurationContext";

function useConfigurationContext() {
  return useContext(ConfigurationContext);
}

export default useConfigurationContext;
