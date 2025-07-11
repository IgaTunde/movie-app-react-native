import { genreMapping } from "@/constants/genres";
import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  genre_ids,
}: Movie) => {
  const genres = genre_ids.map((id) => genreMapping[id]).filter(Boolean);

  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placeholder.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="mt-2 text-white" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-xs text-light-300 mb-1" numberOfLines={1}>
          {genres.join(", ")}
        </Text>

        <View className="flex-row items-center gap-2">
          <Image source={icons.star} className="size-4" />
          <Text className="text-white text-xs font-bold ">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-light-300 text-xs font-medium ">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-light-300 text-xs font-medium uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
