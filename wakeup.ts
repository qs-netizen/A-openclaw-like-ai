import {
    select,
    isCancel,
    cancel,
    intro,
    outro,
} from "@clack/prompts";

import chalk from "chalk";
import figlet from "figlet";

import { runCli } from "./cli";
import { runTelegram } from "./telegram";

const BANNER_FONT = "ANSI Shadow";

const SHADOW = chalk.hex("#2200ff");
const FACE = chalk.hex("#e8dcf8").bold;

export async function runWakeup() {
    let ascii: string;

    try {
        ascii = figlet.textSync("Advik Claw", {
            font: BANNER_FONT,
        });
    } catch {
        ascii = figlet.textSync("Advik Claw", {
            font: "Standard",
        });
    }

    console.clear();

    console.log(SHADOW(ascii));

    intro(FACE("🚀 Welcome to AdvikClaw"));

    const choice = await select({
        message: "Choose a mode",
        options: [
            {
                value: "cli",
                label: "CLI Mode",
                hint: "Chat directly in terminal",
            },
            {
                value: "telegram",
                label: "Telegram Mode",
                hint: "Connect a Telegram bot",
            },
        ],
    });

    if (isCancel(choice)) {
        cancel("Operation cancelled.");
        process.exit(0);
    }

    switch (choice) {
        case "cli":
            outro("Starting CLI mode...");
            await runCli();
            break;

        case "telegram":
            outro("Starting Telegram mode...");
            await runTelegram();
            break;

        default:
            cancel("Unknown option selected.");
            process.exit(1);
    }
}
