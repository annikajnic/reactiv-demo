import React, { useCallback } from "react";
import { Alert, Linking, Text, TouchableOpacity } from "react-native";
import { ExternalLink } from "../ExternalLink";
import { ThemedText } from "../ThemedText";

interface Props {
  title: string;
  link: string;
  buttonColour: string;
  labelColour: string;
}

export const CallToActionItem: React.FC<Props> = ({
  title,
  link,
  buttonColour,
  labelColour,
}) => {
  return (
    <ExternalLink href={link}>
      <TouchableOpacity
        style={{
          backgroundColor: buttonColour,
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => {
          Linking.openURL(link);
        }}
      >
        <ThemedText style={{ color: labelColour }}>{title}</ThemedText>
      </TouchableOpacity>
    </ExternalLink>
  );
};
