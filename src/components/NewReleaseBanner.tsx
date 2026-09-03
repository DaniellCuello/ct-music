import { Image, Pressable, Text, View } from 'react-native';

import { newRelease } from '@/constants/songs';
import { usePlayer } from '@/context/PlayerContext';

export function NewReleaseBanner() {
  const { playSong } = usePlayer();

  return (
    <Pressable
      onPress={() =>
        playSong({
          id: 'new-release',
          title: newRelease.title,
          artist: 'Natanael Cano',
          image: newRelease.image,
        })
      }
      className="mb-8 h-44 overflow-hidden rounded-3xl border border-[#FF0000]/30 bg-[#241414]"
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      <Image source={{ uri: newRelease.image }} className="absolute inset-0 h-full w-full opacity-55" resizeMode="cover" />
      <View className="flex-1 justify-end bg-black/35 p-5">
        <Text className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB3B3]">Nuevo lanzamiento</Text>
        <Text className="mt-1 text-2xl font-black text-white">Natanael Cano, Vol.1</Text>
        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-sm text-white/80">Natanael Cano · 2026</Text>
          <View className="rounded-full bg-[#FF0000] px-4 py-2">
            <Text className="text-sm font-bold text-white">Escuchar</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}