declare module 'phiineas-json-parsify' {
    export class JSONParsify {
        parse(jsonString: string): any;
        extract(ast: any, key: string): any;
    }
}
