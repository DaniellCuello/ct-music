import { Image, Pressable, Text, View } from 'react-native';

import { usePlayer } from '@/context/PlayerContext';

interface SongItemProps {
  id?: string;
  title: string;
  artist: string;
  image: string | number;
}

export function SongItem({ id = '', title, artist, image }: SongItemProps) {
  const { playSong } = usePlayer();
  const song = { id: id || title, title, artist, image };

  return (
    <Pressable
      onPress={() => playSong(song)}
      className="flex-row items-center rounded-2xl border border-white/5 bg-[#1C1C1C] p-2"
      style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
    >
      <Image
        source={typeof image === 'number' ? image : { uri: image }}
        className="h-14 w-14 rounded-xl"
        resizeMode="cover"
      />

      <View className="ml-3 flex-1">
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {title}
        </Text>

        <Text className="mt-1 text-sm text-[#B3B3B3]" numberOfLines={1}>
          {artist}
        </Text>
      </View>

      <Pressable
        onPress={() => playSong(song)}
        className="mr-3 h-9 w-9 items-center justify-center rounded-full bg-[#FF0000]"
        style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
      >
        <Text className="text-sm font-bold text-white">▶</Text>
      </Pressable>

      <Text className="text-2xl text-[#B3B3B3]">⋮</Text>
    </Pressable>
  );
}