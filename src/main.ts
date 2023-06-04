import { readFileSync } from 'fs';
import { parser } from './parser.js';
import { tokenizer } from './tokenizer.js';

const readFile = (fileName: string) => {
  const inputFile = readFileSync(fileName, 'utf-8');
  return inputFile;
};

console.log(parser(tokenizer(readFile('./data/tests/step1/invalid.json'))));
