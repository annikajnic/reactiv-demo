import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

function carouselOrentation(orientation: string): number {
  switch (orientation) {
    case "portrait":
      return 400;
    case "landscape":
      return 250;
    default:
      return ITEM_WIDTH;
  }
}

export interface Item {
  url: string;
  display: "portrait" | "landscape" | "square";
}

const CarouselCardItem: React.FC<{ item: Item; index: number }> = ({
  item,
  index,
}) => {
  const imageHeight = carouselOrentation(item.display);
  console.log(imageHeight);
  return (
    <CarouselView key={index}>
      <Image
        source={{ uri: item.url }}
        style={{
          width: ITEM_WIDTH,
          height: imageHeight,
        }}
      />
    </CarouselView>
  );
};

const CarouselView = styled(View)`
  backgroundcolor: white;
  borderradius: 8;
  width: ${ITEM_WIDTH}px;
  elevation: 7;
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 250,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
