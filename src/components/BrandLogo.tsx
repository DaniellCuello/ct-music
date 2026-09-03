import { Image, Text, View } from 'react-native';

const logoImage = require('../../assets/CT-Music.png');

export function BrandLogo() {
  return (
    <View className="flex-row items-end">
      <Image
        source={logoImage}
        className="mr-2 rounded-xl"
        resizeMode="cover"
        style={{ width: 75, height: 75 }}
      />

      <Text className="text-[56px] font-black tracking-tight text-white">ꛕͲ 𝖬𝗎𝗌𝗂𝖼</Text>
    </View>
  );
}
