import { Pressable, Text, TextInput, View } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = '¿Qué quieres escuchar?',
}: SearchBarProps) {
  return (
    <View className="mb-7 flex-row items-center rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C] px-4 shadow-sm shadow-black/20">
      <Pressable className="mr-3">
        <Text className="text-xl text-[#B3B3B3]">⌕</Text>
      </Pressable>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777777"
        className="h-14 flex-1 text-base text-white"
        selectionColor="#FF0000"
      />
    </View>
  );
}