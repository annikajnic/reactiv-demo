import { View, Text, Button, StyleSheet } from "react-native";
import styled from "styled-components";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { CarouselItems } from "@/components/ui/Carousel/Carouseltems";
import { Item } from "@/components/ui/Carousel/CarouselCardItem";
import { CallToActionItem } from "@/components/ui/CallToActionItem";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import useConfigurationContext from "../../hooks/useConfigurationContext";
import { useEffect, useState } from "react";

import test1 from "../data/test-1.json";
import test2 from "../data/test-2.json";
import test3 from "../data/test-3.json";

export interface JsonData {
  carousel: {
    images: string[];
    display: string;
  };
  textArea: {
    title: string;
    description: string;
    titleColor: string;
    descriptionColor: string;
  };
  callToAction: {
    label: string;
    link: string;
    buttonColor: string;
    labelColor: string;
  };
}

export default function HomeScreen() {
  const { configurationPath } = useConfigurationContext();
  const [jsonData, setJsonData] = useState<JsonData | null>(null);

  useEffect(() => {
    switch (configurationPath) {
      case "test-2.json":
        setJsonData(test2);
        break;
      case "test-3.json":
        setJsonData(test3);
        break;
      default:
        setJsonData(test1);
        break;
    }
  }, [configurationPath]);

  if (!jsonData) {
    return (
      <Container>
        <ThemedText type="title">Loading...</ThemedText>
      </Container>
    );
  }

  const carouselImages: Item[] = jsonData.carousel.images.map(
    (url: string) => ({
      url: url,
      display: jsonData.carousel.display,
    })
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Container>
          <CarouselItems items={carouselImages} />
        </Container>
      }
    >
      <TitleContainer>
        <ThemedText type="title">{jsonData.textArea.title}</ThemedText>
      </TitleContainer>
      <ThemedView>
        <ThemedText type="default">{jsonData.textArea.description}</ThemedText>
      </ThemedView>
      <ThemedView>
        <CallToActionItem {...jsonData.callToAction} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const TitleContainer = styled(ThemedView)`
  padding: 20px 0 20px 0;
  flex-direction: row;
`;
