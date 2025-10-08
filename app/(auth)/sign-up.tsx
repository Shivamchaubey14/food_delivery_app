import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { createUser } from "@/lib/appwrite"; // ✅ Import your Appwrite createUser function

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      return Alert.alert("Error", "Please enter a valid Name, Email address & Password.");
    }

    setIsSubmitting(true);

    try {
      // ✅ Call Appwrite createUser function
      await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      Alert.alert("Success", "Account created successfully!");
      router.replace("/"); // Navigate to home screen (or dashboard)
    } catch (error: any) {
      console.error("Sign-up error:", error.message || error);
      Alert.alert("Error", error.message || "Sign-up failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your full name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))} // ✅ Fixed field mapping
        label="Full Name"
      />

      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))} // ✅ Fixed
        label="Email"
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))} // ✅ Fixed
        label="Password"
        secureTextEntry={true}
      />

      <CustomButton
        title="Sign Up"
        isLoading={isSubmitting}
        onPress={submit}
      />

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="text-gray-500">Already have an account?</Text>
        <Link href="/sign-in" className="text-primary font-semibold">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
