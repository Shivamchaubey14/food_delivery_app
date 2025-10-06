import { Platform } from "react-native";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME,
    platform: "com.fooddelivery",
    databaseId: "68e3e5060024250e5ddd",
}