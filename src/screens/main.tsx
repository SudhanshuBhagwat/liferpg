import { UserContext } from "@/providers/firebaseProvider";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import Login from "./login";
import SettingsScreen from "./settings";
import Icons from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function Main() {
  // const { user, validatingUser } = useContext(UserContext);

  // if (validatingUser) {
  //   return <Text>Checking if user is logged in</Text>;
  // }

  // if (!user) {
  //   return <Login />;
  // }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons name="home" size={24} color={focused ? "blue" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name="setting"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
