## JSON Parser

A simple JSON parser built in TypeScript that converts JSON strings into an Abstract Syntax Tree (AST) and can extract specific properties from the parsed data.

### Features

- Tokenizes JSON strings into tokens.
- Parses tokens into an Abstract Syntax Tree (AST).
- Handles objects, arrays, strings, numbers, booleans, and null values.
- Extracts specific data from the parsed JSON.

### Test Locally

#### Clone the Project

```bash
https://github.com/phiineas/JSON-Parser.git
```
#### Navigate to the Project Directory

```bash
cd JSON-Parser
```

#### Install Dependencies

```bash
npm install
```

#### Build the Project

```bash
npm run build
```

#### Run Tests

```bash
npm test
```

You can add JSON test files in the data/tests directory and update the parser.test.ts to reflect your test cases.

### Usage 

#### Running Locally

- To run the JSON parser locally and see the parsed data:

1. Ensure you have a JSON file located at data/tests/step1/valid.json. 

2. Use the following command to start the application:

```bash
npm run dev
```

3. You will be prompted to enter the key you want to search for. Enter the key and press Enter. To exit the script, type exit and press Enter.

```bash
Enter the key to search for (or type "exit" to quit): 
name
name: Hardin Ellis
Enter the key to search for (or type "exit" to quit): 
age
age: 30
```

By default, this will read the JSON file located at data/tests/step1/valid.json. Modify the main.ts file to specify different paths or file names if needed.

### Use as a package

To install the package, use the following command:
```bash
npm i json-parsify
```

- Import the parser
```bash
import { JSONParser } from 'json-parsify';
```

- Parse a JSON string
```typescript
const jsonString = '{"name": "Hardin Ellis", "age": 30}';
const parser = new JSONParser();
const ast = parser.parse(jsonString);
console.log(ast);
```

- Extract specific data
```typescript
const jsonString = '{"name": "Hardin Ellis", "age": 30}';
const parser = new JSONParser();
const ast = parser.parse(jsonString);
const name = parser.extract(ast, 'name');
console.log(`name: ${name}`);
```

