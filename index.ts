#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./src/wakeup";

const program = new Command();

program
    .name("advik-claw")
    .description("AI Agent CLI powered by Gemini")
    .version("0.0.1");

program
    .command("wakeup")
    .description("Start AdvikClaw")
    .action(async () => {
        try {
            await runWakeup();
        } catch (error) {
            console.error("Error:", error);
            process.exit(1);
        }
    });

if (process.argv.length <= 2) {
    await runWakeup();
} else {
    await program.parseAsync(process.argv);
}
