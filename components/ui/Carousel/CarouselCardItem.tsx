import React from "react";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
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
  display: string;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const CarouselCardItem: React.FC<{ item: Item; index: number }> = ({
  item,
  index,
}) => {
  const imageHeight = carouselOrentation(item.display);

  return (
    <CarouselView>
      <Image
        source={item.url}
        contentFit="fill"
        placeholder={{ blurhash }}
        style={{
          flex: 1,
          width: ITEM_WIDTH,
          minHeight: imageHeight,
          backgroundColor: "#0553",
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
