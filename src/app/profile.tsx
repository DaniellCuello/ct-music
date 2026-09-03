import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNavigation } from '@/components/BottomNavigation';
import { profiles } from '@/constants/profiles';

export default function ProfileScreen() {
  const { user } = useLocalSearchParams<{ user?: string }>();
  const profile = profiles.find((item) => item.id === user) ?? profiles[0];

  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D]" edges={['top']}>
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-5 pt-5">
          <Pressable
            onPress={() => router.back()}
            className="mb-8 h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1C1C1C]"
            style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
            accessibilityLabel="Regresar"
          >
            <Text className="text-2xl text-white">‹</Text>
          </Pressable>

          <View className="items-center">
            <View
              className="overflow-hidden rounded-full border-2 border-[#FF0000]"
              style={{ width: 144, height: 144 }}
            >
              <Image
                source={profile.image}
                className="absolute inset-0"
                style={{ width: 144, height: 144 }}
                resizeMode="cover"
              />
            </View>
            <Text className="mt-5 text-3xl font-black text-white">{profile.name}</Text>
            <Text className="mt-1 text-base text-[#B3B3B3]">{profile.username}</Text>

            <View className="mt-6 flex-row items-center">
              <View className="items-center" style={{ width: 96, marginRight: 32 }}>
                <Text className="text-xl font-bold text-white">{profile.followers}</Text>
                <Text className="mt-1 text-sm text-[#B3B3B3]">Seguidores</Text>
              </View>
              <View className="items-center" style={{ width: 96 }}>
                <Text className="text-xl font-bold text-white">{profile.following}</Text>
                <Text className="mt-1 text-sm text-[#B3B3B3]">Siguiendo</Text>
              </View>
            </View>
          </View>

          <Pressable
            className="mt-8 items-center rounded-full border border-white/40 py-3"
            style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          >
            <Text className="font-bold text-white">Editar perfil</Text>
          </Pressable>

          <Text className="mb-4 mt-10 text-2xl font-bold text-white">Playlists</Text>
          <View className="items-center rounded-3xl border border-white/10 bg-[#1C1C1C] px-6 py-10">
            <Text className="text-xl font-bold text-white">Aún no hay playlists</Text>
            <Text className="mt-2 text-center text-sm leading-5 text-[#B3B3B3]">
              Las playlists de {profile.name} aparecerán aquí.
            </Text>
            <Pressable
              className="mt-6 rounded-full border border-white/40 px-5 py-3"
              style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
            >
              <Text className="font-bold text-white">Crear playlist</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation activeTab="home" />
    </SafeAreaView>
  );
}