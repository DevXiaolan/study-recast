import { parse, prettyPrint, types } from "recast";
import { namedTypes } from 'ast-types';
const { builders } = types;

const tsAst = parse(`
interface A {
  n: number;
  a: string;
}
`, {
  tokens: false,
  parser: require('recast/parsers/typescript'),
  range: false,
});

tsAst.program.body[0].body.body[0].typeAnnotation.typeAnnotation = builders.tsBigIntKeyword();





console.log(prettyPrint(tsAst).code);