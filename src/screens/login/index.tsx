import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "firebaseconfig";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Login() {
  const [_, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "g6t7clrte79s1n4mv6e0eb56slmmg4uk.apps.googleusercontent.com",
    androidClientId:
      "587764834362-2jplr3jilhmvgsettff6jkgdq64bmvc0.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => promptAsync()}>
        <Text>Login with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
