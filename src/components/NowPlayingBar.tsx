import { Image, Pressable, Text, View } from 'react-native';

import { usePlayer } from '@/context/PlayerContext';

export function NowPlayingBar() {
  const {
    currentSong,
    isPlaying,
    progress,
    togglePlayback,
    seek,
    nextSong,
    previousSong,
  } = usePlayer();

  if (!currentSong) {
    return null;
  }

  const elapsedSeconds = Math.round(progress * 240);
  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <View className="absolute bottom-20 left-4 right-4 rounded-[24px] border border-[#FF0000]/20 bg-[#1C1C1C]/95 px-4 py-3 shadow-lg shadow-black/30">
      <View className="flex-row items-center">
        <Image source={{ uri: currentSong.image }} className="h-12 w-12 rounded-xl" resizeMode="cover" />

        <View className="ml-3 flex-1">
          <Text className="text-sm font-semibold text-white" numberOfLines={1}>{currentSong.title}</Text>
          <Text className="text-xs text-[#B3B3B3]" numberOfLines={1}>{currentSong.artist}</Text>
        </View>

        <Pressable
          onPress={previousSong}
          className="mr-2 h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5"
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          accessibilityLabel="Canción anterior"
        >
          <Text className="text-lg font-bold text-white">⏮</Text>
        </Pressable>

        <Pressable
          onPress={togglePlayback}
          className="mr-2 h-10 w-10 items-center justify-center rounded-full bg-[#FF0000]"
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          accessibilityLabel={isPlaying ? 'Pausar canción' : 'Reanudar canción'}
        >
          <Text className="text-base font-bold text-white">{isPlaying ? '❚❚' : '▶'}</Text>
        </Pressable>

        <Pressable
          onPress={nextSong}
          className="h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5"
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          accessibilityLabel="Siguiente canción"
        >
          <Text className="text-lg font-bold text-white">⏭</Text>
        </Pressable>
      </View>

      <View className="mt-3 flex-row items-center">
        <Text className="mr-2 text-[10px] text-[#B3B3B3]">{formatTime(elapsedSeconds)}</Text>
        <View className="flex-1 flex-row gap-1">
          {Array.from({ length: 24 }, (_, index) => {
            const segmentProgress = (index + 1) / 24;
            return (
              <Pressable
                key={segmentProgress}
                onPress={() => seek(index / 23)}
                className={`h-1.5 flex-1 rounded-full ${progress >= segmentProgress ? 'bg-[#FF0000]' : 'bg-white/15'}`}
                accessibilityLabel={`Ir al ${Math.round(segmentProgress * 100)}% de la canción`}
              />
            );
          })}
        </View>
        <Text className="ml-2 text-[10px] text-[#B3B3B3]">4:00</Text>
      </View>
    </View>
  );
}
