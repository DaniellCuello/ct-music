import { ScrollView, Text, View } from 'react-native';

import { BottomNavigation } from '@/components/BottomNavigation';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { SectionTitle } from '@/components/SectionTitle';
import { recentSongs } from '@/constants/songs';
import { SongItem } from '@/components/SongItem';
import { useMemo, useState } from 'react';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filteredSongs = useMemo(() => {
    if (!query.trim()) {
      return recentSongs;
    }

    return recentSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <View className="flex-1 bg-[#0D0D0D]">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} className="flex-1">
        <View className="px-5 pt-14">
          <Header />
          <SearchBar value={query} onChangeText={setQuery} placeholder="Buscar canciones..." />

          <SectionTitle title="Resultados" />

          {filteredSongs.length > 0 ? (
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
          ) : (
            <View className="rounded-2xl bg-[#1C1C1C] p-6">
              <Text className="text-base text-[#B3B3B3]">No se encontraron canciones.</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <BottomNavigation activeTab="search" />
    </View>
  );
}
