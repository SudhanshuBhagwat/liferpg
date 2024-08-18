import { UserContext } from "@/providers/firebaseProvider";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import Login from "./login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { signOut } from "firebase/auth";
import { auth } from "firebaseconfig";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>
        Home!
        <Button
          title="Sign Out"
          onPress={async () => await signOut(auth)}
        ></Button>
      </Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}

export default function Main() {
  const { user, validatingUser } = useContext(UserContext);

  if (validatingUser) {
    return <Text>Checking if user is logged in</Text>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
