import { Emojo } from "../models/emojo.enum";
import { KeyValue } from "../models/key-value.type";

const parseTable: KeyValue[] = [
  { key: Emojo.LOG, value: "console.log" },
  { key: Emojo.IF, value: "if" },
  { key: Emojo.ELSE, value: "else" },
  { key: Emojo.EQUALS, value: "=" },
  { key: Emojo.PLUS, value: "+" },
  { key: Emojo.MINUS, value: "-" },
  { key: Emojo.TIMES, value: "*" },
  { key: Emojo.DIVISION, value: "/" },
  { key: Emojo.BIGGER_THAN, value: ">" },
  { key: Emojo.LESS_THAN, value: "<" },
  { key: Emojo.OPEN_CURLY, value: "{" },
  { key: Emojo.CLOSE_CURLY, value: "}" },
  { key: Emojo.RETURN, value: "return" },
  { key: Emojo.OPEN_PARENTHESIS, value: "(" },
  { key: Emojo.CLOSE_PARENTHESIS, value: ")" },
  { key: Emojo.QUOTES, value: "\"" },
  { key: Emojo.SEMI, value: ";" },
  { key: Emojo.CONST, value: "const" },
  { key: Emojo.VAR, value: "var" },
  { key: Emojo.LET, value: "let" },
  { key: Emojo.LET, value: "let" },
];

export function parseCode(code: string) {
  return  code.split("\n").map(x => x.trim()).filter(x => x.length > 0).map(x => {
    return [...x].map(x => {
      const tokenFound = parseTable.find(y => y.key === x);
      return tokenFound?.value || x
    }).join("");
  }).join("\n");
}