import { SupportedTargets } from "../models/args";
import { Emojo } from "../models/emojo.enum";
import { KeyValue } from "../models/key-value.type";

const parseTables: Record<SupportedTargets, KeyValue[]> = {
  "js": <KeyValue[]>[
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
    { key: Emojo.DOT, value: "." },
    { key: Emojo.FUNCTION, value: "function" },
    { key: Emojo.SWITCH, value: "switch" },
    { key: Emojo.CASE, value: "case" },
    { key: Emojo.BREAK, value: "break" },
    { key: Emojo.DEFAULT, value: "default" },
    { key: Emojo.FOR, value: "for" },
    { key: Emojo.CONTINUE, value: "continue" },
  ],
  "kl": <KeyValue[]>[
    { key: Emojo.LOG, value: "VAIDJ" },
    { key: Emojo.IF, value: "DESTAQUE" },
    { key: Emojo.ELSE, value: "INTERNACIONAL" },
    { key: Emojo.EQUALS, value: "É" },
    { key: Emojo.PLUS, value: "SOMAE" },
    { key: Emojo.MINUS, value: "MENOSAE" },
    { key: Emojo.TIMES, value: "MULTIPLICAE" },
    { key: Emojo.DIVISION, value: "DIVIDEAE" },
    { key: Emojo.BIGGER_THAN, value: "MAIOR" },
    { key: Emojo.LESS_THAN, value: "MENOR" },
    { key: Emojo.OPEN_CURLY, value: "BOA NOITE" },
    { key: Emojo.CLOSE_CURLY, value: "BOA TARDE" },
    { key: Emojo.RETURN, value: "ARREBENTA" },
    { key: Emojo.OPEN_PARENTHESIS, value: "ABRE" },
    { key: Emojo.CLOSE_PARENTHESIS, value: "FECHA" },
    { key: Emojo.QUOTES, value: "\"" },
    { key: Emojo.SEMI, value: ";" },
    { key: Emojo.CONST, value: "KASINAO" },
    { key: Emojo.VAR, value: "KASINAE" },
    { key: Emojo.LET, value: "KASINO" },
    { key: Emojo.DOT, value: "->" },
    { key: Emojo.FUNCTION, value: "SABADAÇO" },
    { key: Emojo.SWITCH, value: "CAN'T" },
    { key: Emojo.CASE, value: "GET" },
    { key: Emojo.BREAK, value: "OVER" },
    { key: Emojo.DEFAULT, value: "BABY" },
    { key: Emojo.FOR, value: "AS BALADAS" },
    { key: Emojo.CONTINUE, value: "VAI" },
  ]
}

export function parseCode(code: string, target: SupportedTargets) {
  return  code.split("\n").map(x => x.trim()).filter(x => x.length > 0).map(x => {
    return [...x].map(x => {
      const tokenFound = parseTables[target].find(y => y.key === x);
      return tokenFound?.value || x;
    }).join("");
  }).join("\n");
}
