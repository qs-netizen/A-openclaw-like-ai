import { askGemini } from "../utils/gemini";

export async function chatCommand(prompt: string) {
    const response = await askGemini(prompt);

    console.log("\n🤖 Gemini");
    console.log(response);
}
