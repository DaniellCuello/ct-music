import { Href, router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

type NavTab = 'home' | 'search' | 'library';

interface BottomNavigationProps {
  activeTab?: NavTab;
}

const navItems: Array<{ key: NavTab; label: string; icon: string; route: Href }> = [
  { key: 'home', label: 'Inicio', icon: '⌂', route: '/' },
  { key: 'search', label: 'Buscar', icon: '⌕', route: '/search' },
  { key: 'library', label: 'Biblioteca', icon: '♫', route: '/library' },
];

export function BottomNavigation({ activeTab = 'home' }: BottomNavigationProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-around border-t border-[#2A2A2A] bg-[#111111]/95 px-5 py-4 backdrop-blur-sm">
      {navItems.map((item) => {
        const isActive = activeTab === item.key;

        return (
          <Pressable
            key={item.key}
            onPress={() => router.push(item.route)}
            className="items-center"
            style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
          >
            <Text className={`text-2xl ${isActive ? 'text-[#FF0000]' : 'text-[#777777]'}`}>
              {item.icon}
            </Text>
            <Text className={`mt-1 text-[10px] ${isActive ? 'font-semibold text-white' : 'text-[#777777]'}`}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}