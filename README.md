# AdvikClaw 🤖

AdvikClaw is a terminal-based AI assistant built with Bun, TypeScript, Commander, Clack Prompts, and Google's Gemini API.

## Features

* Interactive terminal interface
* Beautiful startup banner using Figlet
* Colorful CLI using Chalk
* AI-powered conversations with Gemini
* Multiple modes (CLI and Telegram-ready)
* Fast runtime powered by Bun
* Clean project structure

## Tech Stack

* Bun
* TypeScript
* Commander
* Clack Prompts
* Chalk
* Figlet
* Google Gemini API

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd advik-claw
```

Install dependencies:

```bash
bun install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

Get your Gemini API key from Google AI Studio.

## Running the Project

Start the assistant:

```bash
bun run index.ts
```

or

```bash
bun run index.ts wakeup
```

## Usage

Example conversation:

```text
User > Hello

AdvikClaw > Hello! How can I help you today?
```

Exit the assistant:

```text
User > exit
```

or

```text
User > quit
```

## Project Structure

```text
advik-claw/
│
├── index.ts
├── package.json
├── .env
│
└── src/
    ├── wakeup.ts
    ├── cli.ts
    ├── telegram.ts
    │
    ├── commands/
    │   ├── chat.ts
    │   ├── code.ts
    │   └── search.ts
    │
    └── utils/
        └── gemini.ts
```

## Future Plans

* Telegram Bot Integration
* Web Search Tools
* File Reading Support
* Browser Automation
* Memory System
* Agent Tool Calling
* Multi-Agent Support
* Voice Assistant Features

## Author

Created by Advik.

## License

MIT License
