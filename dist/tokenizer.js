"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
const utils_1 = require("./utils");
const tokenizer = (input) => {
    let current = 0;
    const tokens = [];
    while (current < input.length) {
        let char = input[current];
        if (char === "{") {
            tokens.push({ type: 'BraceOpen', value: char });
            current++;
            continue;
        }
        if (char === "}") {
            tokens.push({ type: 'BraceClose', value: char });
            current++;
            continue;
        }
        if (char === "[") {
            tokens.push({ type: 'BracketOpen', value: char });
            current++;
            continue;
        }
        if (char === "]") {
            tokens.push({ type: 'BracketClose', value: char });
            current++;
            continue;
        }
        if (char === ":") {
            tokens.push({ type: 'Colon', value: char });
            current++;
            continue;
        }
        if (char === ",") {
            tokens.push({ type: 'Comma', value: char });
            current++;
            continue;
        }
        if (char === '"') {
            let value = "";
            char = input[++current];
            while (char !== '"') {
                value += char;
                char = input[++current];
            }
            current++;
            tokens.push({ type: "String", value });
            continue;
        }
        // For number, boolean and null values
        if (/[\d\w]/.test(char)) {
            // if it's a number or a word character
            let value = '';
            while (/[\d\w]/.test(char)) {
                value += char;
                char = input[++current];
            }
            if ((0, utils_1.isNumber)(value))
                tokens.push({ type: 'Number', value });
            else if ((0, utils_1.isBooleanTrue)(value))
                tokens.push({ type: 'True', value });
            else if ((0, utils_1.isBooleanFalse)(value))
                tokens.push({ type: 'False', value });
            else if ((0, utils_1.isNull)(value))
                tokens.push({ type: 'Null', value });
            else
                throw new Error('Unexpected value: ' + value);
            continue;
        }
        // Skip whitespace
        if (/\s/.test(char)) {
            current++;
            continue;
        }
        throw new Error('Unexpected character: ' + char);
    }
    return tokens;
};
exports.tokenizer = tokenizer;
