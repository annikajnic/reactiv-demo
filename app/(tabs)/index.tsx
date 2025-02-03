import { View, Text, Button, StyleSheet } from "react-native";
import styled from "styled-components";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ImageCarousel } from "@/components/ui/Carousel/ImageCarousel";
import { Item } from "@/components/ui/Carousel/CarouselCardItem";
import { CallToActionItem } from "@/components/ui/CallToActionItem";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const data = require("../data/test-3.json");

export default function HomeScreen() {
  const carouselImages: Item[] = data.carousel.images.map((url: string) => ({
    url: url,
    display: data.carousel.display,
  }));

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Container
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageCarousel items={carouselImages} />
        </Container>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{data.textArea.title}</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="default">{data.textArea.description}</ThemedText>
      </ThemedView>
      <ThemedView>
        <CallToActionItem {...data.callToAction} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: #000000;
`;
const Description = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: #000000;
`;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
