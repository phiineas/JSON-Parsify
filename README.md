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

- Build the Project
Ensure you have built the project using the following command:

```bash
npm run build
```
- Run the Parser
You can use the parser by running the compiled main.js file. Ensure your JSON data is placed in the data directory.

```bash
node dist/main.js
```

By default, this will read the JSON file located at data/tests/step1/valid.json. Modify the main.ts file to specify different paths or file names if needed.
