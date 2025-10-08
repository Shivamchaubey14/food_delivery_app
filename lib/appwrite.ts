import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
import { CreateUserParams, SignInParams } from "@/type";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!, 
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!, // Make sure variable name matches
  platform: "com.fooddelivery", // Your bundle ID or package name
  databaseId: "68e3e5060024250e5ddd",
  userCollectionId: "68e3e506001a2b9e22aa", // ✅ Add your collection ID here
};

// ✅ Initialize Appwrite Client
export const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

// ✅ Initialize Services
export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

// ✅ Create User Function
export const createUser = async ({ email, password, name }: CreateUserParams) => {
  try {
    // Create new account
    const newAccount = await account.create(ID.unique(), email, password, name);

    if (!newAccount) throw new Error("Account creation failed");

    // Generate Avatar URL from initials
    const avatarUrl = avatars.getInitials(name).toString();

    // Automatically sign in user after registration
    await signIn({ email, password });

    // Create user document in the database
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        name,
        email,
        accountId: newAccount.$id,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error: any) {
    console.error("Error creating user:", error.message || error);
    throw new Error(error.message || "Failed to create user");
  }
};

// ✅ Sign In Function
export const signIn = async ({ email, password }: SignInParams) => {
  try {
    // Delete previous sessions if any
    await account.deleteSessions();

    // Create new session
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    console.error("Sign-in failed:", error.message || error);
    throw new Error(error.message || "Sign-in failed");
  }
};
