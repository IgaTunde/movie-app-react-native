import { Client, Databases, Query } from "react-native-appwrite";
// track the searches made by a user

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

const DATABASEP_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

export const updateSearchCount = async (query: string, movie: Movie) => {
  const result = await database.listDocuments(DATABASEP_ID, COLLECTION_ID, [
    Query.equal("searchterm", query),
  ]);
  console.log(result);
};
