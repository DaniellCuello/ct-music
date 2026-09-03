import { Text } from 'react-native';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Text className="mb-4 mt-2 text-xl font-bold text-white">
      {title}
    </Text>
  );
}