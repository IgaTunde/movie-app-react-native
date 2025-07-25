import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  View,
} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(
    () =>
      fetchMovies({
        query: searchQuery,
      }),
    false
  );

  useEffect(() => {
    // updateSearchCount(searchQuery, movies[0]);

    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() && movies.length > 0) {
      updateSearchCount(searchQuery, movies[0]);
    }
  }, [movies]);

  return (
    <View className=" flex-1 bg-primary">
      <StatusBar barStyle="light-content" />
      <Image
        source={images.bg}
        className="absolute w-full flex-1 z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full justify-center flex-row mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />

              {loading && <ActivityIndicator size="large" className="my-3" />}

              {error && (
                <Text className="text-red-500 py-5 px-5">{error?.message}</Text>
              )}

              {!loading &&
                !error &&
                searchQuery.trim() &&
                movies?.length > 0 && (
                  <Text className="text-xl text-white font-bold">
                    Search results for{" "}
                    <Text className="text-accent">{searchQuery}</Text>
                  </Text>
                )}
            </View>
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim() ? "No movies found" : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
