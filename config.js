require('dotenv').config();

// Change these two variables
const channel = process.env.TWITCH_CHANNEL;
const programName = process.env.CONFIG_PROGRAM_NAME || "RetroArch";

// List of commands to evaluate
const commands = [
    "left",
    "right",
    "up",
    "down",
    "start",
    "select",
    "a",
    "b",
    "democracy",
    "anarchy",
];

const filteredCommands = [];
const throttledCommands = [];

module.exports = {
    // all commands to print out
    commands,
    // twitch channel connection
    channel,
    // title on the application ('RetroArch')
    programName,
    filteredCommands,
    throttledCommands,
    // Thottle time in seconde
    timeToWait: 10000,
    // keypress delay (ms)
    delay: 100,
};
