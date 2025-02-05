import { Platform, View } from "react-native";
import styled from "styled-components";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { CarouselItems } from "@/components/ui/Carousel/Carouseltems";
import { Item } from "@/components/ui/Carousel/CarouselCardItem";
import { CallToActionItem } from "@/components/ui/CallToActionItem";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import useConfigurationContext from "@/hooks/useConfigurationContext";

// Android emulator runs behind a virtual router/firewall, it cannot see the development machine
// so we need to use a virtual router instance 10.0.2.2. Ideally this value would be stored in a .env file
const API_PATH =
  Platform.OS == "android" ? "http://10.0.2.2:3000/" : "http://localhost:3000/";

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
  const { configurationIndex } = useConfigurationContext();
  const [jsonData, setJsonData] = useState<JsonData | null>(null);

  useEffect(() => {
    fetchData();
  }, [configurationIndex]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_PATH + configurationIndex);
      const result = await response.json();
      setJsonData(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  if (!jsonData) {
    return (
      <Container>
        <ThemedText type="title" style={{ padding: 20, textAlign: "center" }}>
          Loading...
        </ThemedText>
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
        <ThemedText
          type="title"
          style={{ color: jsonData.textArea.titleColor }}
        >
          {jsonData.textArea.title}
        </ThemedText>
      </TitleContainer>
      <ThemedView>
        <ThemedText
          type="default"
          style={{ color: jsonData.textArea.descriptionColor }}
        >
          {jsonData.textArea.description}
        </ThemedText>
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
