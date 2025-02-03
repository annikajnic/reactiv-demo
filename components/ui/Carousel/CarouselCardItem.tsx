import React from "react";
import { Dimensions, Image, ImageSourcePropType } from "react-native";
import styled from "styled-components";
import { ThemedView } from "../../ThemedView";

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

  return (
    <CarouselView>
      <Image
        defaultSource={{ uri: item.url }}
        style={{
          width: ITEM_WIDTH,
          height: imageHeight,
          aspectRatio: 1,
        }}
      />
    </CarouselView>
  );
};

const CarouselView = styled(ThemedView)`
  background-color: white;
  border-radius: 8px;
  width: ${ITEM_WIDTH}px;
  elevation: 7;
`;

export default CarouselCardItem;
