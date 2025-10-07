import { View, Text, Button, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({name:"", email: "", password: "" });

  const submit = async () => {
    // Fix: should be "|| !form.password" instead of "|| form.password"
    if (!form.name || !form.email || !form.password) {
      return Alert.alert("Error", "Please enter a valid Name, Email address & Password.");
    }

    setIsSubmitting(true);

    try {
      // Call Appwrite Sign-up function here

      Alert.alert("Success", "User signed in successfully");
      router.replace('/')
    } catch (error) {
      Alert.alert("Error", "Sign-in failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
        <CustomInput
        placeholder="Enter your full name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({...prev, email:text}))}
        label="Full name"
      />
      <CustomInput
        placeholder="Enter your Email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({...prev, email:text}))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({...prev, password:text}))}
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton
        title= "Sign In"
        isLoading={isSubmitting}
        onPress={submit}
      />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-500">
          Already have an account?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
