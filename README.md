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
git clone https://github.com/phiineas/jsonParser.git
```

```bash
cd jsonParser
```

```bash
npm install
```

```bash
npm run build
```

```bash
npm test
```

- You can add JSON test files in the data/tests directory and update the parser.test.ts to reflect your test cases.

#### Usage 

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
