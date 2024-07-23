import * as fs from 'fs';
import * as path from 'path';
import * as readlineSync from 'readline-sync';
import { JSONParsify } from './JSONParsify';

const dataPath = path.join(__dirname, '..', 'data', 'tests', 'step1', 'valid.json');

const readJSONFile = (filePath: string): string => {
    return fs.readFileSync(filePath, 'utf-8');
};

const main = () => {
    try {
        const jsonString = readJSONFile(dataPath);
        const parser = new JSONParsify();
        const ast = parser.parse(jsonString);

        while (true) {
            const key = readlineSync.question('Enter the key to search for (or type "exit" to quit): ');
            if (key.toLowerCase() === 'exit') {
                break;
            }

            const resultNode = parser.extract(ast, key);

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
