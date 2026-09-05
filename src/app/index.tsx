import { FlatList, Pressable, Text, View } from 'react-native';

import { BottomNavigation } from '@/components/BottomNavigation';
import { Header } from '@/components/Header';
import { NewReleaseBanner } from '@/components/NewReleaseBanner';
import { NowPlayingBar } from '@/components/NowPlayingBar';
import { SearchBar } from '@/components/SearchBar';
import { SectionCard } from '@/components/SectionCard';
import { TrendingCarousel } from '@/components/TrendingCarousel';
import { homeSections, trendingItems } from '@/constants/songs';

function SectionHeader({ title }: { title: string }) {
  return (
    <View className="mb-3 mt-6 flex-row items-center justify-between px-5">
      <Text className="text-lg font-bold text-white">{title}</Text>
      <Pressable>
        <Text className="text-sm font-semibold text-[#B3B3B3]">Mostrar todo</Text>
      </Pressable>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#121212]">
      <FlatList
        data={homeSections}
        keyExtractor={(section) => section.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
        ListHeaderComponent={
          <View className="px-5 pt-14">
            <Header />
            <SearchBar value="" onChangeText={() => {}} />
            <NewReleaseBanner />
            <View className="-mx-5 px-5">
              <TrendingCarousel items={trendingItems} />
            </View>
          </View>
        }
        renderItem={({ item: section }) => (
          <View>
            <SectionHeader title={section.title} />
            <FlatList
              data={section.items}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}
              renderItem={({ item }) => <SectionCard item={item} />}
            />
          </View>
        )}
      />

      <NowPlayingBar />
      <BottomNavigation activeTab="home" />
    </View>
  );
}
