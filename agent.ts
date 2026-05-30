export async function askAgent(message: string) {
    const lower = message.toLowerCase();

    if (lower.includes("hello")) {
        return "Hello!";
    }

    if (lower.includes("time")) {
        return new Date().toLocaleTimeString();
    }

    return `You said: ${message}`;
}
