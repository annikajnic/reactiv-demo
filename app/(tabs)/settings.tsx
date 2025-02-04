import { TouchableOpacity, FlatList, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  CONFIGURATION_OPTIONS,
  ConfigurationItem,
} from "@/constants/Configurations";
import useConfigurationContext from "../../hooks/useConfigurationContext";
import { TitleContainer } from ".";
import { Colors } from "@/constants/Colors";

type ItemProps = {
  item: ConfigurationItem;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={{ backgroundColor }}>
    <ThemedText style={{ color: textColor, padding: 10 }}>
      {item.label}
    </ThemedText>
  </TouchableOpacity>
);

export default function TabTwoScreen() {
  const { configurationPath, setConfigurationPath } = useConfigurationContext();
  const selectedConfiguration = CONFIGURATION_OPTIONS.find(
    (config) => configurationPath === config.path
  );
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <TitleContainer>
        <ThemedText type="title">Settings</ThemedText>
      </TitleContainer>
      <ThemedText style={{ marginBottom: 20, color: "#808080" }}>
        Select a test file to change the home screen.
      </ThemedText>
      <FlatList
        data={CONFIGURATION_OPTIONS}
        renderItem={({ item }) => (
          <Item
            item={item}
            onPress={() => setConfigurationPath(item.path)}
            backgroundColor={
              selectedConfiguration && selectedConfiguration.id === item.id
                ? Colors[colorScheme ?? "light"].tint
                : "#FFFFFF"
            }
            textColor={
              selectedConfiguration && selectedConfiguration.id === item.id
                ? "white"
                : "#000000"
            }
          />
        )}
      />
    </ThemedView>
  );
}
