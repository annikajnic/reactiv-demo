import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ImageCarousel } from "@/components/ui/Carousel/ImageCarousel";
import { Item } from "@/components/ui/Carousel/CarouselCardItem";

const data = require("../data/test-1.json");

export default function HomeScreen() {
  const carouselImages: Item[] = data.carousel.images.map((url: string) => ({
    url: url,
    display: data.carousel.display,
  }));
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ImageCarousel items={carouselImages} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
