import React, { useRef } from "react";

import { Image, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  Item,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "./CarouselCardItem";

export const ImageCarousel: React.FC<{ items: Item[] }> = ({ items }) => {
  const isCarousel = useRef(null);
  console.log("items", items);
  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={items}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};
