import { useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';

import { BrandLogo } from '@/components/BrandLogo';
import { profiles } from '@/constants/profiles';
import { router } from 'expo-router';

export function Header() {
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<'daniell' | 'luisfer'>('daniell');
  const selectedProfile = profiles.find((profile) => profile.id === selectedProfileId) ?? profiles[0];

  const openProfile = () => {
    setIsProfileMenuVisible(false);
    router.push({ pathname: '/profile', params: { user: selectedProfile.id } });
  };

  return (
    <>
      <View className="mb-6 flex-row items-center justify-between">
      <BrandLogo />

        <Pressable
          onPress={() => setIsProfileMenuVisible(true)}
          className="h-12 w-12 overflow-hidden rounded-full border border-[#FF0000]/40 bg-[#1C1C1C] shadow-sm shadow-[#FF0000]/20"
          style={({ pressed }) => ({ width: 48, height: 48, opacity: pressed ? 0.75 : 1 })}
          accessibilityLabel="Abrir selector de perfiles"
        >
          <Image
            source={selectedProfile.image}
            className="absolute inset-0"
            style={{ width: 48, height: 48 }}
            resizeMode="cover"
          />
        </Pressable>
      </View>

      <Modal
        visible={isProfileMenuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsProfileMenuVisible(false)}
      >
        <Pressable
          className="flex-1 justify-start bg-black/70 px-5 pt-24"
          onPress={() => setIsProfileMenuVisible(false)}
        >
          <Pressable className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-5" onPress={() => {}}>
            <View className="mb-5 flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-bold text-white">Perfiles</Text>
                <Text className="mt-1 text-sm text-[#B3B3B3]">Cambia de usuario</Text>
              </View>
              <Pressable onPress={() => setIsProfileMenuVisible(false)} accessibilityLabel="Cerrar perfiles">
                <Text className="text-2xl text-[#B3B3B3]">×</Text>
              </Pressable>
            </View>

            <View className="gap-3">
              {profiles.map((profile) => {
                const isSelected = profile.id === selectedProfile.id;

                return (
                  <Pressable
                    key={profile.id}
                    onPress={() => setSelectedProfileId(profile.id)}
                    className={`flex-row items-center rounded-2xl border p-3 ${isSelected ? 'border-[#FF0000] bg-[#2A1717]' : 'border-white/10 bg-[#242424]'}`}
                    style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
                  >
                    <View
                      className="overflow-hidden rounded-full"
                      style={{ width: 56, height: 56 }}
                    >
                      <Image
                        source={profile.image}
                        className="absolute inset-0"
                        style={{ width: 56, height: 56 }}
                        resizeMode="cover"
                      />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-base font-bold text-white">{profile.name}</Text>
                      <Text className="mt-1 text-sm text-[#B3B3B3]">{profile.username}</Text>
                    </View>
                    {isSelected ? <Text className="text-xl text-[#FF0000]">✓</Text> : null}
                  </Pressable>
                );
              })}
            </View>

            <Pressable
              onPress={openProfile}
              className="mt-5 items-center rounded-full bg-[#FF0000] py-3"
              style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
            >
              <Text className="font-bold text-white">Ver perfil</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}