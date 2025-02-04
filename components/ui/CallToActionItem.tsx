import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { ExternalLink } from "../ExternalLink";

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
    <ExternalLink
      style={{
        backgroundColor: buttonColor,
        padding: 10,
        borderRadius: 5,
      }}
      href={link}
    >
      <ThemedText style={{ color: labelColor, textAlign: "center" }}>
        {label}
      </ThemedText>
    </ExternalLink>
  );
};
