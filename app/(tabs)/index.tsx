import { StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-light-200 flex-1 justify-center items-center">
      <StatusBar barStyle="dark-content" />
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
    </View>
  );
}
