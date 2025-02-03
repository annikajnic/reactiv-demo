import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  label: string;
  link: string;
  buttonColor: string;
  labelColor: string;
}

export const CallToActionItem: React.FC<Props> = ({
  label,
  link,
  buttonColor,
  labelColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: buttonColor,
        padding: 10,
        borderRadius: 5,
      }}
      onPress={() => {
        Linking.openURL(link);
      }}
    >
      <ThemedText style={{ color: labelColor, textAlign: "center" }}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
};
