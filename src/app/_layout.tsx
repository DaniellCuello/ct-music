import { Stack } from 'expo-router';

import { PlayerProvider } from '@/context/PlayerContext';
import '../../global.css';

export default function RootLayout() {
  return (
    <PlayerProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#0D0D0D',
          },
        }}
      />
    </PlayerProvider>
  );
}