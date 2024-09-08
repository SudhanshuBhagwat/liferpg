import UserProvider from "@/providers/firebaseProvider";
import Main from "@/screens/main";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <NavigationContainer>
          {/* <UserProvider> */}
          <Main />
          <StatusBar style="auto" />
          {/* </UserProvider> */}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
