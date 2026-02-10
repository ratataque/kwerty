import type { KeyboardLayout, KeyDef } from "@/types/keyboard";

const KEY_SIZE = 54;
const KEY_GAP = 4;
const KEY_RADIUS = 6;

function key(row: number, col: number, tap: string, hold?: string): KeyDef {
    return {
        x: col * (KEY_SIZE + KEY_GAP),
        y: row * (KEY_SIZE + KEY_GAP),
        w: KEY_SIZE,
        h: KEY_SIZE,
        tap,
        hold,
        row,
        col,
    };
}

function thumbKey(
    row: number,
    col: number,
    tap: string,
    hold?: string,
): KeyDef {
    return {
        x: col * (KEY_SIZE + KEY_GAP),
        y: row * (KEY_SIZE + KEY_GAP),
        w: KEY_SIZE,
        h: KEY_SIZE,
        tap,
        hold,
        row,
        col,
    };
}

// Corne 3x6+3 layout
const corneQwerty: KeyDef[] = [
    // Left hand - Row 0
    key(0, 0, "Tab", ""),
    key(0, 1, "Q", ""),
    key(0, 2, "W", ""),
    key(0, 3, "E", ""),
    key(0, 4, "R", ""),
    key(0, 5, "T", ""),
    // Right hand - Row 0
    key(0, 7, "Y", ""),
    key(0, 8, "U", ""),
    key(0, 9, "I", ""),
    key(0, 10, "O", ""),
    key(0, 11, "P", ""),
    key(0, 12, "\\", ""),
    // Left hand - Row 1
    key(1, 0, "Ctrl", ""),
    key(1, 1, "A", ""),
    key(1, 2, "S", ""),
    key(1, 3, "D", ""),
    key(1, 4, "F", ""),
    key(1, 5, "G", ""),
    // Right hand - Row 1
    key(1, 7, "H", ""),
    key(1, 8, "J", ""),
    key(1, 9, "K", ""),
    key(1, 10, "L", ""),
    key(1, 11, ";", ""),
    key(1, 12, "'", ""),
    // Left hand - Row 2
    key(2, 0, "Shift", ""),
    key(2, 1, "Z", ""),
    key(2, 2, "V", ""),
    key(2, 3, "X", ""),
    key(2, 4, "C", ""),
    key(2, 5, "B", ""),
    // Right hand - Row 2
    key(2, 7, "N", ""),
    key(2, 8, "M", ""),
    key(2, 9, ",", ""),
    key(2, 10, ".", ""),
    key(2, 11, "/", ""),
    key(2, 12, "Shift", ""),
    // Thumbs
    thumbKey(3, 3, "L4", ""),
    thumbKey(3, 4, "L3", ""),
    thumbKey(3, 5, "Alt", ""),
    thumbKey(3, 7, "Esc", ""),
    thumbKey(3, 8, "Space", ""),
    thumbKey(3, 9, "Win", ""),
];

// Layer 1: Colmak
const corneColmak: KeyDef[] = [
    key(0, 0, "Tab", ""),
    key(0, 1, "Q", ""),
    key(0, 2, "W", ""),
    key(0, 3, "F", ""),
    key(0, 4, "P", ""),
    key(0, 5, "B", ""),
    key(0, 7, "J", ""),
    key(0, 8, "L", ""),
    key(0, 9, "U", ""),
    key(0, 10, "Y", ""),
    key(0, 11, ";", ""),
    key(0, 12, "\\", ""),
    key(1, 0, "Ctrl", ""),
    key(1, 1, "A", ""),
    key(1, 2, "R", ""),
    key(1, 3, "S", ""),
    key(1, 4, "T", ""),
    key(1, 5, "G", ""),
    key(1, 7, "M", ""),
    key(1, 8, "N", ""),
    key(1, 9, "E", ""),
    key(1, 10, "I", ""),
    key(1, 11, "O", ""),
    key(1, 12, "'", ""),
    key(2, 0, "Shift", ""),
    key(2, 1, "Z", ""),
    key(2, 2, "V", ""),
    key(2, 3, "D", ""),
    key(2, 4, "C", ""),
    key(2, 5, "X", ""),
    key(2, 7, "K", ""),
    key(2, 8, "H", ""),
    key(2, 9, ",", ""),
    key(2, 10, ".", ""),
    key(2, 11, "/", ""),
    key(2, 12, "Shift", ""),
    thumbKey(3, 4, "", ""),
    thumbKey(3, 5, "Alt", ""),
    thumbKey(3, 7, "Esc", ""),
    thumbKey(3, 8, "Space", ""),
    thumbKey(3, 9, "Win", ""),
];

// Layer 3: Numbers & Symbols
const corneNumbers: KeyDef[] = [
    key(0, 0, "Spell", ""),
    key(0, 1, "!", ""),
    key(0, 2, "@", ""),
    key(0, 3, "#", ""),
    key(0, 4, "$", ""),
    key(0, 5, "%", ""),
    key(0, 7, "&", ""),
    key(0, 8, "(", ""),
    key(0, 9, ")", ""),
    key(0, 10, "-", ""),
    key(0, 11, "=", ""),
    key(1, 0, "Ctrl", ""),
    key(1, 1, "1", ""),
    key(1, 2, "2", ""),
    key(1, 3, "3", ""),
    key(1, 4, "4", ""),
    key(1, 5, "5", ""),
    key(1, 7, "*", ""),
    key(1, 8, "[", ""),
    key(1, 9, "]", ""),
    key(1, 10, "`", ""),
    key(1, 11, "~", ""),
    key(1, 12, "Bksp", ""),
    key(2, 0, "Shift", ""),
    key(2, 1, "6", ""),
    key(2, 2, "7", ""),
    key(2, 3, "8", ""),
    key(2, 4, "9", ""),
    key(2, 5, "0", ""),
    key(2, 7, "^", ""),
    key(2, 8, "Ent", ""),
];

// Layer 4: System & Media
const corneSystem: KeyDef[] = [
    key(0, 0, "Alt+Tab", ""),
    key(0, 1, "é", ""),
    key(0, 2, "è", ""),
    key(0, 3, "ê", ""),
    key(0, 4, "œ", ""),
    key(0, 5, "TG2", ""),
    key(0, 7, "æ", ""),
    key(0, 8, "è", ""),
    key(0, 9, "ç", ""),
    key(0, 10, "à", ""),
    key(0, 11, "F12", ""),
    key(0, 12, "OUT", ""),
    key(1, 0, "Ctrl", ""),
    key(1, 2, "Prev", ""),
    key(1, 3, "Next", ""),
    key(1, 4, "Play", ""),
    key(1, 5, "TG1", ""),
    key(1, 7, "←", ""),
    key(1, 8, "↓", ""),
    key(1, 9, "↑", ""),
    key(1, 10, "→", ""),
    key(1, 11, "Br-", ""),
    key(1, 12, "Br+", ""),
    key(2, 0, "Shift", ""),
    key(2, 2, "Mute", ""),
    key(2, 3, "Vol-", ""),
    key(2, 4, "Vol+", ""),
    key(2, 7, "BT Clr", ""),
    key(2, 8, "BT0", ""),
    key(2, 9, "BT1", ""),
    key(2, 10, "BT2", ""),
    key(2, 11, "BT3", ""),
    thumbKey(3, 5, "Boot", ""),
    thumbKey(3, 7, "Ent", ""),
    thumbKey(3, 8, "L5", ""),
];

export const corneLayout: KeyboardLayout = {
    id: "corne",
    name: "Corne (CRKBD)",
    description: "3x6+3 split columnar stagger keyboard (French layout)",
    rows: 4,
    cols: 13,
    splitGap: 1,
    layers: [
        { name: "Qwerty", keys: corneQwerty },
        { name: "Colmak", keys: corneColmak },
        { name: "Numbers", keys: corneNumbers },
        { name: "System", keys: corneSystem },
    ],
};

// TOTEM 38-key layout (3x5+4 thumbs per side)
const totemBase: KeyDef[] = [
    // Row 0 - Left
    key(0, 0, "Q", ""),
    key(0, 1, "W", ""),
    key(0, 2, "E", ""),
    key(0, 3, "R", ""),
    key(0, 4, "T", ""),
    // Row 0 - Right
    key(0, 6, "Y", ""),
    key(0, 7, "U", ""),
    key(0, 8, "I", ""),
    key(0, 9, "O", ""),
    key(0, 10, "P", ""),
    // Row 1 - Left
    key(1, 0, "A", ""),
    key(1, 1, "S", ""),
    key(1, 2, "D", ""),
    key(1, 3, "F", ""),
    key(1, 4, "G", ""),
    // Row 1 - Right
    key(1, 6, "H", ""),
    key(1, 7, "J", ""),
    key(1, 8, "K", ""),
    key(1, 9, "L", ""),
    key(1, 10, ";", ""),
    // Row 2 - Left (outer pinky has shift)
    key(2, 0, "Z", "Shift"),
    key(2, 1, "X", ""),
    key(2, 2, "C", ""),
    key(2, 3, "V", ""),
    key(2, 4, "B", ""),
    // Row 2 - Right (outer pinky has shift)
    key(2, 6, "N", ""),
    key(2, 7, "M", ""),
    key(2, 8, ",", ""),
    key(2, 9, ".", ""),
    key(2, 10, "/", "Shift"),
    // Thumbs - Left
    thumbKey(3, 3, "SYM", "SL"),
    thumbKey(3, 4, "Space", ""),
    // Thumbs - Right
    thumbKey(3, 6, "Bksp", ""),
    thumbKey(3, 7, "ACT", "SL"),
];

// TOTEM Layer 1: Numbers & Symbols
const totemSym: KeyDef[] = [
    // Row 0 - Left
    key(0, 0, "1", ""),
    key(0, 1, "2", ""),
    key(0, 2, "3", ""),
    key(0, 3, "4", ""),
    key(0, 4, "5", ""),
    // Row 0 - Right
    key(0, 6, "6", ""),
    key(0, 7, "7", ""),
    key(0, 8, "8", ""),
    key(0, 9, "9", ""),
    key(0, 10, "0", ""),
    // Row 1 - Left
    key(1, 0, "!", ""),
    key(1, 1, "@", ""),
    key(1, 2, "#", ""),
    key(1, 3, "$", ""),
    key(1, 4, "%", ""),
    // Row 1 - Right
    key(1, 6, "^", ""),
    key(1, 7, "&", ""),
    key(1, 8, "*", ""),
    key(1, 9, "(", ""),
    key(1, 10, ")", ""),
    // Row 2 - Left
    key(2, 0, "`", "Shift"),
    key(2, 1, "~", ""),
    key(2, 2, "{", ""),
    key(2, 3, "}", ""),
    key(2, 4, "\\", ""),
    // Row 2 - Right
    key(2, 6, "-", ""),
    key(2, 7, "=", ""),
    key(2, 8, "[", ""),
    key(2, 9, "]", ""),
    key(2, 10, "|", "Shift"),
    // Thumbs
    thumbKey(3, 3, "", ""),
    thumbKey(3, 4, "Space", ""),
    thumbKey(3, 6, "Bksp", ""),
    thumbKey(3, 7, "", ""),
];

// TOTEM Layer 2: F-keys, Media, Arrows
const totemAct: KeyDef[] = [
    // Row 0 - Left
    key(0, 0, "F1", ""),
    key(0, 1, "F2", ""),
    key(0, 2, "F3", ""),
    key(0, 3, "F4", ""),
    key(0, 4, "F5", ""),
    // Row 0 - Right
    key(0, 6, "F6", ""),
    key(0, 7, "F7", ""),
    key(0, 8, "F8", ""),
    key(0, 9, "F9", ""),
    key(0, 10, "F10", ""),
    // Row 1 - Left
    key(1, 0, "F11", ""),
    key(1, 1, "F12", ""),
    key(1, 2, "", ""),
    key(1, 3, "", ""),
    key(1, 4, "", ""),
    // Row 1 - Right
    key(1, 6, "←", ""),
    key(1, 7, "↓", ""),
    key(1, 8, "↑", ""),
    key(1, 9, "→", ""),
    key(1, 10, "", ""),
    // Row 2 - Left
    key(2, 0, "", "Shift"),
    key(2, 1, "", ""),
    key(2, 2, "", ""),
    key(2, 3, "", ""),
    key(2, 4, "", ""),
    // Row 2 - Right
    key(2, 6, "Mute", ""),
    key(2, 7, "Vol-", ""),
    key(2, 8, "Vol+", ""),
    key(2, 9, "Prev", ""),
    key(2, 10, "Next", "Shift"),
    // Thumbs
    thumbKey(3, 3, "", ""),
    thumbKey(3, 4, "Space", ""),
    thumbKey(3, 6, "Bksp", ""),
    thumbKey(3, 7, "", ""),
];

// TOTEM Layer 3: Bluetooth
const totemCon: KeyDef[] = [
    // Row 0 - Left
    key(0, 0, "BT0", ""),
    key(0, 1, "BT1", ""),
    key(0, 2, "BT2", ""),
    key(0, 3, "BT3", ""),
    key(0, 4, "BT4", ""),
    // Row 0 - Right
    key(0, 6, "", ""),
    key(0, 7, "", ""),
    key(0, 8, "", ""),
    key(0, 9, "", ""),
    key(0, 10, "", ""),
    // Row 1 - Left
    key(1, 0, "BT Clr", ""),
    key(1, 1, "", ""),
    key(1, 2, "", ""),
    key(1, 3, "", ""),
    key(1, 4, "", ""),
    // Row 1 - Right
    key(1, 6, "", ""),
    key(1, 7, "", ""),
    key(1, 8, "", ""),
    key(1, 9, "", ""),
    key(1, 10, "", ""),
    // Row 2 - Left
    key(2, 0, "", ""),
    key(2, 1, "", ""),
    key(2, 2, "", ""),
    key(2, 3, "", ""),
    key(2, 4, "", ""),
    // Row 2 - Right
    key(2, 6, "", ""),
    key(2, 7, "", ""),
    key(2, 8, "", ""),
    key(2, 9, "", ""),
    key(2, 10, "", ""),
    // Thumbs
    thumbKey(3, 3, "", ""),
    thumbKey(3, 4, "", ""),
    thumbKey(3, 6, "", ""),
    thumbKey(3, 7, "", ""),
];

export const totemLayout: KeyboardLayout = {
    id: "totem",
    name: "TOTEM",
    description: "38-key split columnar stagger keyboard (GrimalDev QWERTY)",
    rows: 4,
    cols: 11,
    splitGap: 1,
    layers: [
        { name: "Base", keys: totemBase },
        { name: "SYM", keys: totemSym },
        { name: "ACT", keys: totemAct },
        { name: "CON", keys: totemCon },
    ],
};

// Kinesis 360 Pro - simplified representation
const kinesisBase: KeyDef[] = [
    // Row 0 - function/special row
    key(0, 0, "`", ""),
    key(0, 1, "é", ""),
    key(0, 2, "è", ""),
    key(0, 3, "ê", ""),
    key(0, 4, "F4", ""),
    key(0, 5, "œ", ""),
    key(0, 8, "æ", ""),
    key(0, 9, "è", ""),
    key(0, 10, "ç", ""),
    key(0, 11, "à", ""),
    // Row 1
    key(1, 0, "Tab", ""),
    key(1, 1, "Q", ""),
    key(1, 2, "W", ""),
    key(1, 3, "E", ""),
    key(1, 4, "R", ""),
    key(1, 5, "T", ""),
    key(1, 8, "Y", ""),
    key(1, 9, "U", ""),
    key(1, 10, "I", ""),
    key(1, 11, "O", ""),
    key(1, 12, "P", ""),
    key(1, 13, "\\", ""),
    // Row 2
    key(2, 0, "Ctrl", ""),
    key(2, 1, "A", ""),
    key(2, 2, "S", ""),
    key(2, 3, "D", ""),
    key(2, 4, "F", ""),
    key(2, 5, "G", ""),
    key(2, 6, "Win", ""),
    key(2, 7, "Win", ""),
    key(2, 8, "H", ""),
    key(2, 9, "J", ""),
    key(2, 10, "K", ""),
    key(2, 11, "L", ""),
    key(2, 12, ";", ""),
    key(2, 13, "'", ""),
    // Row 3
    key(3, 0, "Shift", ""),
    key(3, 1, "Z", ""),
    key(3, 2, "V", ""),
    key(3, 3, "X", ""),
    key(3, 4, "C", ""),
    key(3, 5, "B", ""),
    key(3, 6, "Home", ""),
    key(3, 7, "PgUp", ""),
    key(3, 8, "N", ""),
    key(3, 9, "M", ""),
    key(3, 10, ",", ""),
    key(3, 11, ".", ""),
    key(3, 12, "/", ""),
    key(3, 13, "Shift", ""),
    // Row 4 - bottom row with thumb cluster
    key(4, 1, "L2", ""),
    key(4, 2, "Win", ""),
    key(4, 3, "←", ""),
    key(4, 4, "→", ""),
    thumbKey(4, 5, "L1", ""),
    thumbKey(4, 6, "Alt", ""),
    thumbKey(4, 7, "L2", ""),
    thumbKey(4, 8, "L1", ""),
    thumbKey(4, 9, "Esc", ""),
    thumbKey(4, 10, "Space", ""),
    key(4, 11, "↓", ""),
    key(4, 12, "↑", ""),
];

// Layer 1: Keypad/Numbers
const kinesisKeypad: KeyDef[] = [
    // Row 0
    key(0, 0, "`", ""),
    key(0, 1, "ë", ""),
    key(0, 2, "é", ""),
    key(0, 3, "ê", ""),
    key(0, 4, "F4", ""),
    key(0, 5, "œ", ""),
    key(0, 8, "è", ""),
    key(0, 9, "ç", ""),
    key(0, 10, "à", ""),
    // Row 1
    key(1, 0, "Tab", ""),
    key(1, 1, "!", ""),
    key(1, 2, "@", ""),
    key(1, 3, "#", ""),
    key(1, 4, "$", ""),
    key(1, 5, "%", ""),
    key(1, 8, "&", ""),
    key(1, 9, "(", ""),
    key(1, 10, ")", ""),
    key(1, 11, "-", ""),
    key(1, 12, "=", ""),
    key(1, 13, "Bksp", ""),
    // Row 2
    key(2, 0, "Ctrl", ""),
    key(2, 1, "1", ""),
    key(2, 2, "2", ""),
    key(2, 3, "3", ""),
    key(2, 4, "4", ""),
    key(2, 5, "5", ""),
    key(2, 8, "*", ""),
    key(2, 9, "[", ""),
    key(2, 10, "]", ""),
    key(2, 11, "`", ""),
    key(2, 12, "~", ""),
    key(2, 13, "Bksp", ""),
    // Row 3
    key(3, 0, "Shift", ""),
    key(3, 1, "6", ""),
    key(3, 2, "7", ""),
    key(3, 3, "8", ""),
    key(3, 4, "9", ""),
    key(3, 5, "0", ""),
    key(3, 8, "^", ""),
    key(3, 9, "Bksp", ""),
    key(3, 10, ",", ""),
    key(3, 11, ".", ""),
    key(3, 12, "/", ""),
    key(3, 13, "Shift", ""),
    // Row 4
    key(4, 2, "Win", ""),
    key(4, 3, "←", ""),
    key(4, 4, "→", ""),
    thumbKey(4, 6, "Alt", ""),
    thumbKey(4, 8, "PgDn", ""),
    thumbKey(4, 9, "Ent", ""),
    thumbKey(4, 10, "Space", ""),
    key(4, 11, "↓", ""),
    key(4, 12, "↑", ""),
];

// Layer 2: Bluetooth & Media
const kinesisBT: KeyDef[] = [
    // Row 0
    key(0, 0, "F1", ""),
    key(0, 1, "F2", ""),
    key(0, 2, "F3", ""),
    key(0, 3, "F4", ""),
    key(0, 4, "F5", ""),
    key(0, 5, "F6", ""),
    key(0, 8, "F7", ""),
    key(0, 9, "F8", ""),
    key(0, 10, "F9", ""),
    key(0, 11, "F10", ""),
    key(0, 12, "F11", ""),
    key(0, 13, "F12", ""),
    // Row 1
    key(1, 1, "ë", ""),
    key(1, 2, "é", ""),
    key(1, 3, "è", ""),
    key(1, 4, "ê", ""),
    key(1, 9, "ç", ""),
    key(1, 10, "à", ""),
    key(1, 12, "œ", ""),
    // Row 2
    key(2, 1, "Prev", ""),
    key(2, 2, "Play", ""),
    key(2, 3, "Next", ""),
    key(2, 4, "Rnd", ""),
    key(2, 8, "BT0", ""),
    key(2, 9, "BT1", ""),
    key(2, 10, "BT2", ""),
    key(2, 11, "BT3", ""),
    // Row 3
    key(3, 3, "Vol-", ""),
    key(3, 4, "Vol+", ""),
    key(3, 8, "BT Clr", ""),
    // Row 4
    key(4, 2, "BL-", ""),
    key(4, 3, "BL+", ""),
    key(4, 4, "BL", ""),
    thumbKey(4, 6, "Alt", ""),
    key(4, 11, "Br+", ""),
    key(4, 12, "Br-", ""),
];

// Layer 3: Mod
const kinesisMod: KeyDef[] = [
    // Row 0
    key(0, 1, "BT0", ""),
    key(0, 2, "BT1", ""),
    key(0, 3, "BT2", ""),
    key(0, 4, "BT3", ""),
    key(0, 5, "BT4", ""),
    // Row 2
    key(2, 6, "RGB", ""),
    key(2, 8, "BT Clr", ""),
    key(2, 10, "RGB", ""),
    // Row 4
    thumbKey(4, 5, "BL+", ""),
    thumbKey(4, 6, "BL-", ""),
    thumbKey(4, 8, "BL", ""),
    thumbKey(4, 10, "BL", ""),
    key(4, 11, "RGB", ""),
    key(4, 12, "BL+", ""),
];

export const kinesisLayout: KeyboardLayout = {
    id: "kinesis-360",
    name: "Kinesis Advantage 360 Pro",
    description:
        "Split concave ergonomic keyboard with ZMK firmware (French layout)",
    rows: 5,
    cols: 14,
    splitGap: 2,
    layers: [
        { name: "Base", keys: kinesisBase },
        { name: "Keypad", keys: kinesisKeypad },
        { name: "BT/Media", keys: kinesisBT },
        { name: "Mod", keys: kinesisMod },
    ],
};

export const allKeyboardLayouts: Record<string, KeyboardLayout> = {
    corne: corneLayout,
    totem: totemLayout,
    "kinesis-360": kinesisLayout,
};
