import { TouchableOpacity, FlatList, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useConfigurationContext from "../../hooks/useConfigurationContext";
import { TitleContainer } from ".";
import { Colors } from "@/constants/Colors";

export type ConfigurationItem = {
  id: number;
  label: string;
};

export const CONFIGURATION_OPTIONS: ConfigurationItem[] = [
  {
    id: 0,
    label: "Landscape",
  },
  {
    id: 1,
    label: "Portrait",
  },
  {
    id: 2,
    label: "Square",
  },
];

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
  const { configurationIndex, setConfigurationIndex } =
    useConfigurationContext();
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <TitleContainer>
        <ThemedText type="title">Settings</ThemedText>
      </TitleContainer>
      <ThemedText style={{ marginBottom: 20, color: "#808080" }}>
        Select a test case to change the look of the homepage.
      </ThemedText>
      <FlatList
        data={CONFIGURATION_OPTIONS}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            onPress={() => setConfigurationIndex(index)}
            backgroundColor={
              configurationIndex === index
                ? Colors[colorScheme ?? "light"].tint
                : "#FFFFFF"
            }
            textColor={configurationIndex === index ? "white" : "#000000"}
          />
        )}
      />
    </ThemedView>
  );
}
