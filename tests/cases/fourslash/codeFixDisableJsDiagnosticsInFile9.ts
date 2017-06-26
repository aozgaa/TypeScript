/// <reference path='fourslash.ts' />

// @allowjs: true
// @noEmit: true
// @checkJs: true

// @Filename: a.js
//// /** @type {number} */[|
//// const x = "";|]

verify.rangeAfterCodeFix(`
// @ts-ignore
const x = "";`,
/*includeWhiteSpace*/ true, /*errorCode*/ undefined, /*index*/ 0);

