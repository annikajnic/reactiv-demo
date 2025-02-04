import React, { useEffect } from "react";

import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  Item,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "./CarouselCardItem";

export const CarouselItems: React.FC<{ items: Item[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  //watch for items changes to reset the value to 0
  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

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
