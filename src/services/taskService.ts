import { getDailyTasks } from "@/api/gemini";
import { DATE_FORMAT } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export async function getTodaysTasks() {
  try {
    const tasksJson = await AsyncStorage.getItem(
      format(new Date(), DATE_FORMAT)
    );
    if (tasksJson !== null) {
      return JSON.parse(tasksJson);
    } else {
      const tasksString = await getDailyTasks();
      let tasks = JSON.parse(tasksString);
      tasks = tasks.map((task) => {
        return {
          ...task,
          done: false,
        };
      });
      await AsyncStorage.setItem(
        format(new Date(), DATE_FORMAT),
        JSON.stringify(tasks)
      );
      return tasks;
    }
  } catch (error) {
    console.error(error);
  }
}
