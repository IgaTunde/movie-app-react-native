import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>
        MovieDetails Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Magnam, delectus ipsa quaerat mollitia culpa vero ab voluptatibus odit
        quae dolorum fugit, architecto natus maiores explicabo deleniti minus
        magni! Ex, sed. {id}
      </Text>
    </View>
  );
};

export default MovieDetails;
