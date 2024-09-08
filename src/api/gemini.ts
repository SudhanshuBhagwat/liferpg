import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCAxGDsxYWTV-DZS_15kKv3rlOODg715yk");

export async function getDailyTasks() {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: SchemaType.ARRAY,
        items: {
          type: SchemaType.OBJECT,
          properties: {
            task: {
              type: SchemaType.STRING,
            },
            description: {
              type: SchemaType.STRING,
            },
            exp: {
              type: SchemaType.INTEGER,
            },
          },
        },
      },
    },
  });
  const result = await model.generateContent([
    `Generate 4 tasks which are related to Drawing. They should be simple tasks and not take more than 15-30 mins. Also give them exp points according to their difficulty which should sum to 40 points`,
  ]);
  return result.response.text();
}
