import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText?: (text: string) => void;
}
const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onFocus={onPress}
        placeholder={placeholder}
        placeholderTextColor="#ab8bff"
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
