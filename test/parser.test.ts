import { tokenizer } from "../src/tokenizer";
import { parser } from "../src/parser";
import { readFileSync } from "fs";
import path from "path";

// helper function to read JSON files
const readJSONFile = (fileName: string) => {
    const filePath = path.resolve(__dirname, `../data/tests/${fileName}`);
    return readFileSync(filePath, "utf-8");
};

// test cases for the parser
describe("JSON Parser", () => {
    test("parses valid JSON", () => {
        const validJSON = readJSONFile("step1/valid.json");
        const tokens = tokenizer(validJSON);
        const ast = parser(tokens);

        const expectedAST = {
            "type": "Array",
            "value": [
                {
                    "type": "Object",
                    "value": {
                        "_id": {
                            "type": "String",
                            "value": "647ceaf3657eade56f8224eb"
                        },
                        "index": {
                            "type": "Number",
                            "value": 0
                        },
                        "guid": {
                            "type": "String",
                            "value": "af252bb6-3761-4008-83e9-776ea903f68f"
                        },
                        "isActive": {
                            "type": "Boolean",
                            "value": true
                        },
                        "balance": {
                            "type": "String",
                            "value": "$1,995.92"
                        },
                        "picture": {
                            "type": "String",
                            "value": "http://placehold.it/32x32"
                        },
                        "age": {
                            "type": "Number",
                            "value": 30
                        },
                        "eyeColor": {
                            "type": "String",
                            "value": "brown"
                        },
                        "name": {
                            "type": "String",
                            "value": "Hardin Ellis"
                        },
                        "gender": {
                            "type": "String",
                            "value": "male"
                        },
                        "company": {
                            "type": "String",
                            "value": "MAGNEMO"
                        },
                        "email": {
                            "type": "String",
                            "value": "hardinellis@magnemo.com"
                        },
                        "phone": {
                            "type": "String",
                            "value": "+1 (825) 430-2162"
                        },
                        "address": {
                            "type": "String",
                            "value": "529 Seacoast Terrace, Cucumber, Montana, 8875"
                        },
                        "about": {
                            "type": "String",
                            "value": "Voluptate mollit id aliquip culpa magna tempor proident nisi non velit. Cillum duis sunt ea mollit consequat commodo Lorem dolor anim sunt consectetur esse do. Occaecat eu cillum in deserunt consectetur. Eu labore aliqua qui qui sunt dolor occaecat. Et est officia excepteur reprehenderit velit aliquip commodo qui in quis adipisicing est nisi. Mollit eu non laboris deserunt aute labore nisi quis nostrud in. Qui fugiat eu ea culpa incididunt ut labore nisi reprehenderit sit et eu occaecat incididunt.\\r\\n"
                        },
                        "registered": {
                            "type": "String",
                            "value": "2021-04-02T12:13:08 -03:00"
                        },
                        "tags": {
                            "type": "Array",
                            "value": [
                                { "type": "String", "value": "ut" },
                                { "type": "String", "value": "esse" },
                                { "type": "String", "value": "elit" },
                                { "type": "String", "value": "laborum" },
                                { "type": "String", "value": "voluptate" },
                                { "type": "String", "value": "excepteur" },
                                { "type": "String", "value": "sunt" }
                            ]
                        },
                        "friends": {
                            "type": "Array",
                            "value": [
                                {
                                    "type": "Object",
                                    "value": {
                                        "id": { "type": "Number", "value": 0 },
                                        "name": { "type": "String", "value": "Conway Lane" }
                                    }
                                },
                                {
                                    "type": "Object",
                                    "value": {
                                        "id": { "type": "Number", "value": 1 },
                                        "name": { "type": "String", "value": "Carey Schwartz" }
                                    }
                                },
                                {
                                    "type": "Object",
                                    "value": {
                                        "id": { "type": "Number", "value": 2 },
                                        "name": { "type": "String", "value": "Kelli Bryan" }
                                    }
                                }
                            ]
                        },
                        "greeting": {
                            "type": "String",
                            "value": "Hello, Hardin Ellis! You have 1 unread messages."
                        },
                        "favoriteFruit": {
                            "type": "String",
                            "value": "apple"
                        }
                    }
                }
            ]
        };        

        expect(ast).toEqual(expectedAST);
    });

    test("throws error on invalid JSON", () => {
        const invalidJSON = readJSONFile("step1/invalid.json");
        const tokens = tokenizer(invalidJSON);

        expect(() => parser(tokens)).toThrow();
    });
});
