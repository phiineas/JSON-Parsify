import { Token, ASTNode } from "./types.js";

export const parser = (tokens: Token[]) => {
    if (!tokens.length) {
      throw new Error("Nothing to parse. Exiting!");
    }

    let current = 0;
  
    function advance() {
      return tokens[++current];
    }

    function parseValue(): ASTNode {
        const token = tokens[current];

        switch (token.type) {
            case "String":
                return { type: "String", value: token.value };
            case "Number":
                return { type: "Number", value: Number(token.value) };
            case "True":
                return { type: "Boolean", value: true };
            case "False":
                return { type: "Boolean", value: false };
            case "Null":
                return { type: "Null", value: null};
            case "BraceOpen":
                return parseObject();
            case "BraceClose":
                return parseArray();
            default:
                throw new Error(`Unexpected token type: $(token.type)`);
        }
    }

    function parseObject() {
        const node: ASTNode = { type: "Object", value: {} };
        let token = advance(); // eat '{'

        // iterate through the tokens until we reach a BraceClose
        while (token.type !== "BraceClose") {
            // Ensure that the token represents a valid string key

            if (token.type === "String") {
                const key = token.value;
                token = advance(); // eat key
                if (token.type !== "Colon") throw new Error("Expected: in key-value pair");
                token = advance(); // eat ':'
                const value = parseValue(); // recursively parse the value
                node.value[key] = value;
            } else {
                throw new Error(`Expected string key in object. Token type: ${token.type}`);
            }
            token = advance(); // eat value or ','

            // check for a ',' to handle multiple key-value pairs
            if (token.type === "Comma") token = advance(); // eat ',' if present
        }

        return node;
    }

    function parseArray() {
        const node: ASTNode = { type: "Array", value: [] };
        let token = advance(); // eat '['

        while (token.type !== "BracketClose") {
            const value = parseValue();
            node.value.push(value);

            token = advance(); // eat value or ','
            if (token.type === "Comma") token = advance(); // eat ',' if present
        }

        return node;
    }

    const AST = parseValue();

    return AST;
}; 
