import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { BottomNavigation } from '@/components/BottomNavigation';
import { FeaturedCard } from '@/components/FeaturedCard';
import { Header } from '@/components/Header';
import { NewReleaseBanner } from '@/components/NewReleaseBanner';
import { NowPlayingBar } from '@/components/NowPlayingBar';
import { SearchBar } from '@/components/SearchBar';
import { SectionTitle } from '@/components/SectionTitle';
import { SongItem } from '@/components/SongItem';
import { TrendingCarousel } from '@/components/TrendingCarousel';
import { featuredItems, recentSongs, trendingItems } from '@/constants/songs';

export default function HomeScreen() {
  const [query, setQuery] = useState('');

  const filteredSongs = useMemo(() => {
    if (!query.trim()) {
      return recentSongs;
    }

    const normalizedQuery = query.toLowerCase();

    return recentSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(normalizedQuery) ||
        song.artist.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <View className="flex-1 bg-[#0D0D0D]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pt-14">
          <Header />

          <SearchBar value={query} onChangeText={setQuery} />

          <NewReleaseBanner />

          <TrendingCarousel items={trendingItems} />

          <SectionTitle title="Escucha algo nuevo" />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-5 px-5"
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {featuredItems.map((item) => (
              <FeaturedCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            ))}
          </ScrollView>

          <SectionTitle title="Escuchado recientemente" />

          <View className="gap-2">
            {filteredSongs.map((song) => (
              <SongItem
                key={song.id}
                title={song.title}
                artist={song.artist}
                image={song.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <NowPlayingBar />
      <BottomNavigation activeTab="home" />
    </View>
  );
}