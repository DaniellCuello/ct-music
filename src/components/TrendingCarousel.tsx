import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { FeaturedCard } from '@/components/FeaturedCard';
import type { FeaturedItem } from '@/types/music';

interface TrendingCarouselProps {
  items: FeaturedItem[];
}

export function TrendingCarousel({ items }: TrendingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<ScrollView>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => {
        const nextIndex = (index + 1) % items.length;
        carouselRef.current?.scrollTo({ x: nextIndex * 304, animated: true });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <View className="mb-8">
      <Text className="mb-4 text-xl font-bold text-white">Tendencias musicales</Text>
      <ScrollView
        ref={carouselRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="-mx-5 px-5"
        contentContainerStyle={{ paddingRight: 20 }}
        snapToInterval={304}
        decelerationRate="fast"
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / 304);
          setActiveIndex(Math.min(index, items.length - 1));
        }}
      >
        {items.map((item) => (
          <FeaturedCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        ))}
      </ScrollView>
      <View className="mt-4 flex-row items-center justify-center gap-2">
        {items.map((item, index) => (
          <Pressable
            key={item.id}
            onPress={() => {
              setActiveIndex(index);
              carouselRef.current?.scrollTo({ x: index * 304, animated: true });
            }}
            className={`h-2 rounded-full ${index === activeIndex ? 'w-7 bg-[#FF0000]' : 'w-2 bg-[#777777]'}`}
            accessibilityLabel={`Mostrar tendencia ${index + 1}`}
          />
        ))}
      </View>
    </View>
  );
}