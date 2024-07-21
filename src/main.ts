import * as fs from 'fs';
import * as path from 'path';
import { tokenizer } from './tokenizer';
import { parser } from './parser';
import { Token, ASTNode } from './types';

const dataPath = path.join(__dirname, '..', 'data', 'tests', 'step1', 'valid.json');

const readJSONFile = (filePath: string): string => {
    return fs.readFileSync(filePath, 'utf-8');
};

const parseJSON = (jsonString: string): ASTNode => {
    const tokens: Token[] = tokenizer(jsonString);
    return parser(tokens);
};

const main = () => {
    try {
        const jsonString = readJSONFile(dataPath);
        
        const ast = parseJSON(jsonString);
        
        console.log(JSON.stringify(ast, null, 2));

        // const data = JSON.parse(jsonString);
        // const ages = data.map((item: { age: number }) => item.age);
        // console.log('Ages:', ages);

    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
};

main();
