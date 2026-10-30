/* eslint-disable react-native/no-inline-styles */
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[
        style.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom }
      ]}
    >
      <TouchableOpacity
        onPress={async () => {
          setLoading(true);
          await new Promise<void>(r => setTimeout(() => r(), 2000));
          setLoading(false)
        }
      }
      >
        <Text>Tap me</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator />}
    </ScrollView >
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;



// type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
//
// export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title='Go to Profile 123' onPress={() => props.navigation.push("Profile", { userId: "123" })} />
//     </View>
//   )
// };
//
// type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;
//
// export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
//   const userId = props.route.params?.userId || "No User Id";
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Profile ScreenUser ID: {userId}</Text>
//       <Button title='Go to Settings' onPress={() => props.navigation.push("Home")} />
//     </View>);
// };
//
// export const StackRouter: React.FC = () => {
//   const Stack = createNativeStackNavigator<RootStackParamList>();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>)
// }




// import { NativeModules } from 'react-native';
//
// const { ExampleModule } = NativeModules;
//
// const doJob = async () => {
//   try {
//     const result = await ExampleModule.doJob();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };
