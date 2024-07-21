"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const tokenizer_1 = require("./tokenizer");
const parser_1 = require("./parser");
const dataPath = path.join(__dirname, '..', 'data', 'tests', 'step1', 'valid.json');
const readJSONFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8');
};
const parseJSON = (jsonString) => {
    const tokens = (0, tokenizer_1.tokenizer)(jsonString);
    return (0, parser_1.parser)(tokens);
};
const main = () => {
    try {
        const jsonString = readJSONFile(dataPath);
        const ast = parseJSON(jsonString);
        console.log(JSON.stringify(ast, null, 2));
        // const data = JSON.parse(jsonString);
        // const ages = data.map((item: { age: number }) => item.age);
        // console.log('Ages:', ages);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
};
main();
