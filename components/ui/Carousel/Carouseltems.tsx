import React, { useRef } from "react";

import { FlatList, ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  Item,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "./CarouselCardItem";

export const CarouselItems: React.FC<{ items: Item[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <>
      <Carousel
        layout="default"
        shouldOptimizeUpdates
        onScrollIndexChanged={setActiveIndex}
        layoutCardOffset={9}
        data={items}
        vertical={false}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          paddingVertical: 10,
        }}
      />
    </>
  );
};
