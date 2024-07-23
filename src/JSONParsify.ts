import { tokenizer } from './tokenizer';
import { parser } from './parser';
import { Token, ASTNode } from './types';

export class JSONParsify {
    parse(jsonString: string): ASTNode {
        const tokens: Token[] = tokenizer(jsonString);
        return parser(tokens);
    }

    extract(ast: ASTNode, key: string): any {
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
    }
}
