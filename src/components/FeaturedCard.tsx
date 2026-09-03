import { Image, Pressable, Text, View } from 'react-native';

import { PlayButton } from '@/components/PlayButton';

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  image: string;
}

export function FeaturedCard({ title, subtitle, image }: FeaturedCardProps) {
  return (
    <Pressable
      className="mr-4 w-72 overflow-hidden rounded-[28px] border border-white/5 bg-[#1C1C1C]"
      style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
    >
      <Image source={{ uri: image }} className="h-40 w-full" resizeMode="cover" />

      <View className="p-4">
        <Text className="text-xl font-bold text-white">{title}</Text>
        <Text className="mt-1 text-sm leading-5 text-[#B3B3B3]">{subtitle}</Text>

        <View className="mt-4 self-start">
          <PlayButton label="Escuchar" />
        </View>
      </View>
    </Pressable>
  );
}