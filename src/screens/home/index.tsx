import { DATE_FORMAT } from "@/constants";
import { getTodaysTasks } from "@/services/taskService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Icons from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getTodaysTasks().then((todaysTasks) => setTasks(todaysTasks));
    // AsyncStorage.removeItem(format(new Date(), DATE_FORMAT));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <FlatList
        data={tasks}
        renderItem={(task) => {
          return (
            <View key={task.index} style={styles.taskContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Pressable>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      backgroundColor: "#d1d5db",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 50,
                        backgroundColor: "#22c55e",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icons name="check" color="white" size={18} />
                    </View>
                  </View>
                </Pressable>
                <Text style={styles.task}>{task.item.task}</Text>
              </View>
              <Text style={styles.exp}>{task.item.exp} EXP</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  taskContainer: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  task: {
    fontSize: 20,
    fontWeight: "medium",
  },
  exp: {
    fontSize: 16,
    color: "green",
  },
});
