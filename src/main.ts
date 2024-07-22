import * as fs from 'fs';
import * as path from 'path';
import { tokenizer } from './tokenizer';
import { parser } from './parser';
import { Token, ASTNode } from './types';
import * as readlineSync from 'readline-sync';

const dataPath = path.join(__dirname, '..', 'data', 'tests', 'step1', 'valid.json');

const readJSONFile = (filePath: string): string => {
    return fs.readFileSync(filePath, 'utf-8');
};

const parseJSON = (jsonString: string): ASTNode => {
    const tokens: Token[] = tokenizer(jsonString);
    return parser(tokens);
};

const extractValue = (node: ASTNode): any => {
    if (node.type === 'Object') {
        const result: Record<string, any> = {};
        for (const key in node.value) {
            result[key] = extractValue(node.value[key]);
        }
        return result;
    } else if (node.type === 'Array') {
        return node.value.map(extractValue);
    } else {
        return node.value;
    }
};

const findKeyInAST = (ast: ASTNode, key: string): any => {
    const search = (node: ASTNode, key: string): any => {
        if (node.type === 'Object') {
            if (node.value[key]) {
                return node.value[key];
            }
            for (const k in node.value) {
                const result = search(node.value[k], key);
                if (result) return result;
            }
        } else if (node.type === 'Array') {
            for (const item of node.value) {
                const result = search(item, key);
                if (result) return result;
            }
        }
        return null;
    };

    const result = search(ast, key);
    return result ? extractValue(result) : null;
};

const main = () => {
    try {
        const jsonString = readJSONFile(dataPath);
        const ast = parseJSON(jsonString);

        while (true) {
            const key = readlineSync.question('Enter the key to search for (or type "exit" to quit): ');
            if (key.toLowerCase() === 'exit') {
                break;
            }

            const resultNode = findKeyInAST(ast, key);

            if (resultNode) {
                console.log(`${key}: ${JSON.stringify(resultNode, null, 2)}`);
            } else {
                console.error(`Key "${key}" not found in the JSON data.`);
            }
        }
    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
};

main();
