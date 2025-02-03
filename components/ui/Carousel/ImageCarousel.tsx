import React, { useRef } from "react";

import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  Item,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "./CarouselCardItem";

export const ImageCarousel: React.FC<{ items: Item[] }> = ({ items }) => {
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={items}
        vertical={false}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};
