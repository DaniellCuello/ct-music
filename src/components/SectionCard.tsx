import { useState } from 'react';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

import { usePlayer } from '@/context/PlayerContext';
import { recentSongs } from '@/constants/songs';
import type { SectionItem } from '@/types/music';

interface SectionCardProps {
  item: SectionItem;
}

export function SectionCard({ item }: SectionCardProps) {
  const [hovered, setHovered] = useState(false);
  const { playSong } = usePlayer();

  const handlePlay = () => {
    const song = recentSongs.find(
      (s) => s.title.toLowerCase() === item.title.toLowerCase(),
    );
    if (song) {
      playSong(song);
    }
  };

  return (
    <Pressable
      className="mr-3 w-[130px]"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={handlePlay}
      style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
    >
      <View className="relative mb-2">
        <View
          className="h-[130px] w-[130px] overflow-hidden bg-[#282828]"
          style={{ borderRadius: item.isArtist ? 65 : 6 }}
        >
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%' }}
            contentFit="cover"
            transition={150}
          />
        </View>

        {hovered && (
          <Pressable
            onPress={handlePlay}
            className="absolute bottom-2 right-2 h-10 w-10 items-center justify-center rounded-full bg-[#1DB954] shadow-lg shadow-black/50"
          >
            <Text className="text-lg font-bold text-black">▶</Text>
          </Pressable>
        )}
      </View>

      <Text className="text-sm font-semibold text-white" numberOfLines={1}>
        {item.title}
      </Text>
      <Text className="mt-0.5 text-xs text-[#B3B3B3]" numberOfLines={2}>
        {item.subtitle}
      </Text>
    </Pressable>
  );
}