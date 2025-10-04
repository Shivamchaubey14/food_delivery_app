import { FlatList, Pressable, Text, View } from "react-native";
import './globals.css';
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "@/constants";
export default function Index() {
  return (
     <SafeAreaView>
        <FlatList 
        data={offers} 
        renderItem={({item, index}) => {
          return (
            <View>
              <Pressable className="bg-amber-600">
                <Text>{item.title}</Text>
                  
              </Pressable>
            </View>
          )
        }}/>
     </SafeAreaView>
  );
}
