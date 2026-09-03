import { Pressable, Text } from 'react-native';

interface PlayButtonProps {
  label?: string;
  onPress?: () => void;
  small?: boolean;
}

export function PlayButton({
  label = 'Escuchar',
  onPress,
  small = false,
}: PlayButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={
        small
          ? 'items-center justify-center rounded-full bg-[#FF0000] px-3 py-2'
          : 'items-center justify-center rounded-full bg-[#FF0000] px-4 py-2'
      }
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <Text className="text-sm font-semibold text-white">{label}</Text>
    </Pressable>
  );
}
