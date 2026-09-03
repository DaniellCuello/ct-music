import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNavigation } from '@/components/BottomNavigation';
import { Header } from '@/components/Header';
import { NowPlayingBar } from '@/components/NowPlayingBar';
import { SectionTitle } from '@/components/SectionTitle';
import { SongItem } from '@/components/SongItem';
import { recentSongs } from '@/constants/songs';

export default function LibraryScreen() {
  const [query, setQuery] = useState('');
  const filteredSongs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return recentSongs;
    }

    return recentSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(normalizedQuery) ||
        song.artist.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D]" edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} className="flex-1">
        <View className="px-5 pt-14">
          <Header />

          <View className="mb-7 flex-row items-center rounded-2xl border border-white/10 bg-[#1C1C1C] px-4">
            <Text className="mr-3 text-xl text-[#B3B3B3]">⌕</Text>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar en tu biblioteca"
              placeholderTextColor="#777777"
              className="h-12 flex-1 text-base text-white"
              accessibilityLabel="Buscar en tu biblioteca"
            />
          </View>

          <View className="mb-7 overflow-hidden rounded-3xl bg-[#E51B23]">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200' }}
              className="h-36 w-full opacity-60"
              resizeMode="cover"
            />
            <View className="absolute inset-0 justify-end p-5">
              <Text className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                Tu espacio musical
              </Text>
              <Text className="mt-1 text-2xl font-black text-white">Todo lo que guardaste</Text>
            </View>
          </View>

          <SectionTitle title="Tu biblioteca" />

          <View className="mb-6 gap-3">
            <Pressable
              className="rounded-2xl bg-[#1C1C1C] p-4"
              style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
            >
              <Text className="text-lg font-bold text-white">Canciones favoritas</Text>
              <Text className="mt-1 text-sm text-[#B3B3B3]">12 títulos guardados</Text>
            </Pressable>

            <Pressable
              className="rounded-2xl bg-[#1C1C1C] p-4"
              style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
            >
              <Text className="text-lg font-bold text-white">Playlists</Text>
              <Text className="mt-1 text-sm text-[#B3B3B3]">4 listas creadas</Text>
            </Pressable>

            <Pressable
              className="rounded-2xl bg-[#1C1C1C] p-4"
              style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
            >
              <Text className="text-lg font-bold text-white">Álbumes</Text>
              <Text className="mt-1 text-sm text-[#B3B3B3]">8 álbumes recientes</Text>
            </Pressable>
          </View>

          <SectionTitle title="Recientes" />

          <View className="gap-2">
            {filteredSongs.slice(0, 4).map((song) => (
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
      <BottomNavigation activeTab="library" />
    </SafeAreaView>
  );
}
