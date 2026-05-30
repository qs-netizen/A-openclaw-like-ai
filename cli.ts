import {
    text,
    isCancel,
    intro,
    outro,
    spinner,
} from "@clack/prompts";

import chalk from "chalk";
import { askGemini } from "./utils/gemini";

export async function runCli() {
    intro(chalk.cyan("🤖 AdvikClaw AI Assistant"));

    while (true) {
        const input = await text({
            message: "User >",
            placeholder: "Ask anything...",
        });

        if (isCancel(input)) {
            outro("Goodbye!");
            process.exit(0);
        }

        const prompt = String(input).trim();

        if (!prompt) {
            continue;
        }

        if (
            prompt.toLowerCase() === "exit" ||
            prompt.toLowerCase() === "quit"
        ) {
            outro("Goodbye!");
            process.exit(0);
        }

        const loader = spinner();

        try {
            loader.start("Thinking...");

            const response = await askGemini(`
You are AdvikClaw, a helpful AI assistant.

Rules:
- Refer to yourself as AdvikClaw.
- Never say you are Gemini.
- Be concise and helpful.
- Format code properly.

User: ${prompt}
            `);

            loader.stop("Response generated");

            console.log(
                "\n" +
                chalk.blueBright.bold("AdvikClaw > ") +
                chalk.white(response) +
                "\n"
            );
        } catch (error) {
            loader.stop("Failed");

            console.log(
                "\n" +
                chalk.red.bold("AdvikClaw > ") +
                "Sorry, I couldn't process that request.\n"
            );

            console.error(error);
        }
    }
}
