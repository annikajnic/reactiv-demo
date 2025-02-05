import ConfigurationContext from "@/components/providers/ConfigurationContext";
import { useContext } from "react";

function useConfigurationContext() {
  return useContext(ConfigurationContext);
}

export default useConfigurationContext;
