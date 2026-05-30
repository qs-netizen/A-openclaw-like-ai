import { askGemini } from "../utils/gemini";

export async function codeCommand(task: string) {
    const response = await askGemini(
        `Generate code for the following task:\n\n${task}`
    );

    console.log("\n💻 Code Assistant\n");
    console.log(response);
}
