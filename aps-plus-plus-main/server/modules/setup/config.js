const defaults = require("../../config.js");

const gamemode = "Mothership"; // keep it as ffa

const gamemodes = {
    "FFA": {
        BOTS: 9
    }, // "defaults" is already FFA.
    "Open TDM": {
        MODE: "tdm",
        TEAMS: 2 + (Math.random() * 3 | 0),
        BOTS: 10
    },
    "custom1": {
        X_GRID: 16,
        Y_GRID: 16,
        WIDTH: 5000,
        HEIGHT: 5000,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "norm", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "norm", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"]
        ],
    },
    "Portal FFA": {
        BOTS: 10,
        X_GRID: 15,
        Y_GRID: 15,
        WIDTH: 5000,
        HEIGHT: 5000,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "rock", "port", "rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock", "port", "rock", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "roid", "rock", "rock", "rock", "roid", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest"],
            ["nest", "rock", "roid", "nest", "nest", "rock", "nest", "port", "nest", "rock", "nest", "nest", "roid", "rock", "nest"],
            ["nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "roid", "rock", "rock", "rock", "roid", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "rock", "port", "rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock", "port", "rock", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
        ]
    },
    "Groups": {
        GROUPS: (Math.random() * 3 | 0) + 2,
        secondaryGameMode: "Squads",
        BOTS: 15
    },
    "Maze Groups": {
        GROUPS: (Math.random() * 3 | 0) + 2,
        MAZE: 32,
        X_GRID: 16,
        Y_GRID: 16,
        WIDTH: 5000,
        HEIGHT: 5000,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"]
        ],
        secondaryGameMode: "Squads"
    },
    "Maze": {
        MAZE: 32,
        X_GRID: 16,
        Y_GRID: 16,
        WIDTH: 5000,
        HEIGHT: 5000,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"]
        ],
        secondaryGameMode: "Maze"
    },
    "Portal Maze": {
        BOTS: 10,
        X_GRID: 15,
        Y_GRID: 15,
        WIDTH: 5000,
        HEIGHT: 5000,
        MAZE: 32,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "port", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "port", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "port", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "port", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "port", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
        ],
        secondaryGameMode: "Maze"
    },
    "Maze 2TDM": {
        MAZE: 32,
        X_GRID: 16,
        Y_GRID: 16,
        WIDTH: 6500,
        HEIGHT: 6500,
        MODE: "tdm",
        TEAMS: 2,
        BOTS: 24,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "bap1", "bas1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "bas1", "bas1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas2", "bas2", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas2", "bap2", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"]
        ],
        secondaryGameMode: "Maze"
    },
    "Maze 4TDM": {
        MAZE: 32,
        X_GRID: 16,
        Y_GRID: 16,
        WIDTH: 6500,
        HEIGHT: 6500,
        MODE: "tdm",
        TEAMS: 4,
        BOTS: 24,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "bap1", "bas1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas4", "bap4", "nest"],
            ["nest", "bas1", "bas1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas4", "bas4", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "bas3", "bas3", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas2", "bas2", "nest"],
            ["nest", "bap3", "bas3", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas2", "bap2", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"]
        ],
        secondaryGameMode: "Maze"
    },
    "2TDM": {
        MODE: "tdm",
        TEAMS: 2,
        ROOM_SETUP: [
            ["bas1", "rock", "nest", "nest", "nest", "roid", "roid", "nest", "nest", "nest", "rock", "bas2"],
            ["bap1", "rock", "nest", "nest", "nest", "rock", "rock", "nest", "nest", "nest", "rock", "bap2"],
            ["bas1", "nest", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "nest", "bas2"],
            ["bas1", "nest", "nest", "nest", "nest", "roid", "rock", "nest", "nest", "nest", "nest", "bas2"],
            ["bap1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap2"],
            ["bas1", "nest", "nest", "rock", "nest", "nest", "nest", "nest", "roid", "nest", "nest", "bas2"],
            ["bas1", "nest", "nest", "roid", "nest", "nest", "nest", "nest", "rock", "nest", "nest", "bas2"],
            ["bap1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap2"],
            ["bas1", "nest", "nest", "nest", "nest", "rock", "roid", "nest", "nest", "nest", "nest", "bas2"],
            ["bas1", "nest", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "nest", "bas2"],
            ["bap1", "rock", "nest", "nest", "nest", "rock", "rock", "nest", "nest", "nest", "rock", "bap2"],
            ["bas1", "rock", "nest", "nest", "nest", "roid", "roid", "nest", "nest", "nest", "rock", "bas2"]
        ],
        BOTS: 16
    },
    "4TDM": {
        MODE: "tdm",
        TEAMS: 4,
        ROOM_SETUP: [
            ["bas1", "bas1", "nest", "nest", "nest", "roid", "roid", "nest", "nest", "nest", "bas3", "bas3"],
            ["bas1", "bap1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap3", "bas3"],
            ["nest", "nest", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "roid", "nest", "nest", "nest"],
            ["roid", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "roid"],
            ["roid", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "roid"],
            ["nest", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "roid", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "nest", "nest"],
            ["bas4", "bap4", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap2", "bas2"],
            ["bas4", "bas4", "nest", "nest", "nest", "roid", "roid", "nest", "nest", "nest", "bas2", "bas2"]
        ],
        BOTS: 16
    },
    "8TDM": {
        MODE: "tdm",
        TEAMS: 8,
        ROOM_SETUP: [
            ["bas1", "bap1", "nest", "nest", "nest", "bap5", "bap5", "nest", "nest", "nest", "bap3", "bas3"],
            ["bap1", "bas1", "nest", "nest", "nest", "bas5", "bas5", "nest", "nest", "nest", "bas3", "bap3"],
            ["nest", "nest", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "roid", "nest", "nest", "nest"],
            ["bap8", "bas8", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas6", "bap6"],
            ["bap8", "bas8", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas6", "bap6"],
            ["nest", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "roid", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "nest", "nest"],
            ["bap4", "bas4", "nest", "nest", "nest", "bas7", "bas7", "nest", "nest", "nest", "bas2", "bap2"],
            ["bas4", "bap4", "nest", "nest", "nest", "bap7", "bap7", "nest", "nest", "nest", "bap2", "bas2"]
        ],
        BOTS: 32
    },
    "Siege": {
        MODE: "tdm",
        TEAMS: 1,
        SPECIAL_BOSS_SPAWNS: true,
        WIDTH: 5500,
        HEIGHT: 5500,
        X_GRID: 19,
        Y_GRID: 19,
        ROOM_SETUP: [
            ["outb", "outb", "outb", "outb", "outb", "outb", "outb", "wall", "wall", "wall", "wall", "wall", "outb", "outb", "outb", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "outb", "outb", "outb", "wall", "boss", "boss", "boss", "wall", "outb", "outb", "outb", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "outb", "outb", "outb", "wall", "boss", "boss", "boss", "wall", "outb", "outb", "outb", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "wall", "wall", "wall", "wall", "boss", "boss", "boss", "wall", "wall", "wall", "wall", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "wall", "wall", "nest", "nest", "wall", "nest", "nest", "nest", "wall", "nest", "nest", "wall", "wall", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "wall", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "wall", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "wall", "nest", "nest", "bas1", "nest", "nest", "nest", "nest", "nest", "bas1", "nest", "nest", "wall", "outb", "outb", "outb"],
            ["wall", "wall", "wall", "wall", "wall", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "wall", "wall", "wall", "wall", "wall"],
            ["wall", "boss", "boss", "boss", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "boss", "boss", "boss", "wall"],
            ["wall", "boss", "boss", "boss", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "boss", "boss", "boss", "wall"],
            ["wall", "boss", "boss", "boss", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "boss", "boss", "boss", "wall"],
            ["wall", "wall", "wall", "wall", "wall", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "wall", "wall", "wall", "wall", "wall"],
            ["outb", "outb", "outb", "wall", "nest", "nest", "bas1", "nest", "nest", "nest", "nest", "nest", "bas1", "nest", "nest", "wall", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "wall", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "wall", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "wall", "wall", "nest", "nest", "wall", "nest", "nest", "nest", "wall", "nest", "nest", "wall", "wall", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "wall", "wall", "wall", "wall", "boss", "boss", "boss", "wall", "wall", "wall", "wall", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "outb", "outb", "outb", "wall", "boss", "boss", "boss", "wall", "outb", "outb", "outb", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "outb", "outb", "outb", "wall", "boss", "boss", "boss", "wall", "outb", "outb", "outb", "outb", "outb", "outb", "outb"],
            ["outb", "outb", "outb", "outb", "outb", "outb", "outb", "wall", "wall", "wall", "wall", "wall", "outb", "outb", "outb", "outb", "outb", "outb", "outb"],
        ],
        secondaryGameMode: "Boss Rush",
        BOTS: 6
    },
    "Mothership": {
        MODE: "tdm",
        TEAMS: (Math.random() * 3 | 0) + 2,
        MOTHERSHIP_LOOP: true,
        secondaryGameMode: "Mothership",
        BOTS: 24
    },
    "Portal Mothership": {
        BOTS: 10,
        X_GRID: 15,
        Y_GRID: 15,
        WIDTH: 5000,
        HEIGHT: 5000,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "rock", "port", "rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock", "port", "rock", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "roid", "rock", "rock", "rock", "roid", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest"],
            ["nest", "rock", "roid", "nest", "nest", "rock", "nest", "port", "nest", "rock", "nest", "nest", "roid", "rock", "nest"],
            ["nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "roid", "rock", "rock", "rock", "roid", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "rock", "port", "rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock", "port", "rock", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
        ],
        MODE: "tdm",
        TEAMS: (Math.random() * 3 | 0) + 2,
        MOTHERSHIP_LOOP: true,
        secondaryGameMode: "Mothership"
    },
    "Tag": {
        MODE: "tdm",
        TEAMS: (Math.random() * 3 | 0) + 2,
        TAG: true,
        secondaryGameMode: "Tag",
        BOTS: 10
    },
    "Portal Tag": {
        BOTS: 10,
        X_GRID: 15,
        Y_GRID: 15,
        WIDTH: 5000,
        HEIGHT: 5000,
        ROOM_SETUP: [
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "rock", "port", "rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock", "port", "rock", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "roid", "rock", "rock", "rock", "roid", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest"],
            ["nest", "rock", "roid", "nest", "nest", "rock", "nest", "port", "nest", "rock", "nest", "nest", "roid", "rock", "nest"],
            ["nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "roid", "rock", "rock", "rock", "roid", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "rock", "port", "rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock", "port", "rock", "nest"],
            ["nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest", "nest", "rock", "rock", "rock", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
        ],
        MODE: "tdm",
        TEAMS: (Math.random() * 3 | 0) + 2,
        TAG: true,
        secondaryGameMode: "Tag",
        BOTS: 24
    },
    "Domination": {
        MODE: "tdm",
        TEAMS: (Math.random() * 3 | 0) + 2,
        X_GRID: 15,
        Y_GRID: 15,
        ROOM_SETUP: [
            ["roid", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "roid"],
            ["rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock"],
            ["roid", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "roid"]
        ],
        DOMINATOR_LOOP: true,
        secondaryGameMode: "Domination",
        BOTS: 24
    },
    "Portal Domination": {
        MODE: "tdm",
        TEAMS: (Math.random() * 3 | 0) + 2,
        X_GRID: 15,
        Y_GRID: 15,
        ROOM_SETUP: [
            ["roid", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "roid"],
            ["rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock"],
            ["nest", "nest", "port", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "port", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "port", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "port", "nest", "nest"],
            ["rock", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "rock"],
            ["roid", "rock", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "rock", "roid"]
        ],
        DOMINATOR_LOOP: true,
        secondaryGameMode: "Domination",
        BOTS: 24
    },
    "2TDM Domination": {
        MODE: "tdm",
        TEAMS: 2,
        X_GRID: 15,
        Y_GRID: 15,
        ROOM_SETUP: [
            ["bas1", "bas1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["bas1", "bap1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap2", "bas2"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas2", "bas2"]
        ],
        DOMINATOR_LOOP: true,
        secondaryGameMode: "Domination",
        BOTS: 24
    },
    "4TDM Domination": {
        MODE: "tdm",
        TEAMS: 4,
        X_GRID: 15,
        Y_GRID: 15,
        WIDTH: 6500,
        HEIGHT: 6500,
        ROOM_SETUP: [
            ["bas1", "bas1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas3", "bas3"],
            ["bas1", "bap1", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap3", "bas3"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "dom0", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "dom0", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["bas4", "bap4", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bap2", "bas2"],
            ["bas4", "bas4", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "bas2", "bas2"]
        ],
        DOMINATOR_LOOP: true,
        secondaryGameMode: "Domination",
        BOTS: 24
    },
    "Space": {
        MODE: "tdm",
        TEAMS: 3,
        ARENA_TYPE: "circle",
        SPACE_MODE: true,
        WIDTH: 5000,
        HEIGHT: 5000,
        X_GRID: 9,
        Y_GRID: 9,
        ROOM_SETUP: [
            ["rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock"],
            ["nest", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["roid", "rock", "nest", "nest", "nest", "nest", "nest", "rock", "roid"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "rock", "nest", "nest", "nest", "nest"],
            ["rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock"]
        ],
        BOTS: 6,
        secondaryGameMode: "Space"
    },
    "Space 4TDM": {
        MODE: "tdm",
        TEAMS: 4,
        ARENA_TYPE: "circle",
        SPACE_MODE: true,
        WIDTH: 5000,
        HEIGHT: 5000,
        X_GRID: 9,
        Y_GRID: 9,
        ROOM_SETUP: [
            ["rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock"],
            ["nest", "nest", "nest", "nest", "bas1", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["roid", "bas2", "nest", "nest", "nest", "nest", "nest", "bas4", "roid"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest", "nest"],
            ["nest", "nest", "nest", "nest", "bas3", "nest", "nest", "nest", "nest"],
            ["rock", "nest", "nest", "nest", "roid", "nest", "nest", "nest", "rock"]
        ],
        BOTS: 6,
        secondaryGameMode: "Space"
    },
};

const mode = gamemodes[gamemode];

let output = {};
for (let key in defaults) {
    output[key] = defaults[key];
    if (mode[key]) {
        output[key] = mode[key];
    }
}

output.gameModeName = gamemode;
if (["Tag", "Domination", "Mothership"].includes(gamemode)) {
    output.gameModeName = `${output.TEAMS} TDM ${gamemode}`;
}
if (gamemode === "Open TDM") {
    output.gameModeName = `Open ${output.TEAMS} TDM`;
}

module.exports = { output };
