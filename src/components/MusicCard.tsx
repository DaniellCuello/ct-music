import { Image, Pressable, Text, View } from 'react-native';

import { PlayButton } from '@/components/PlayButton';
import type { FeaturedItem } from '@/types/music';

interface MusicCardProps extends FeaturedItem {
  onPress?: () => void;
}

export function MusicCard({
  title,
  subtitle,
  image,
  onPress,
}: MusicCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="mr-4 w-72 overflow-hidden rounded-2xl bg-[#1C1C1C]"
      style={({ pressed }) => ({
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <Image source={{ uri: image }} className="h-40 w-full" resizeMode="cover" />

      <View className="p-4">
        <Text className="text-lg font-bold text-white">{title}</Text>

        <Text className="mt-1 text-sm leading-5 text-[#B3B3B3]">{subtitle}</Text>

        <View className="mt-4 self-start">
          <PlayButton label="Escuchar" />
        </View>
      </View>
    </Pressable>
  );
}
