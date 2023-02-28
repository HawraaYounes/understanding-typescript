"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Video 34: Using "Watch Mode"
/**Watch mode is used to recompile the file automatically without re-running "tsc app.ts" using the command:
 * "tsc app.ts -w"  OR  "tsc app.ts --watch" **/
//Video 35: Compiling the Entire Project / Multiple Files
//To create 'tsconfig file, run: "tsc --init"
//To compile the whole typescript project, run: "tsc"
//To enter general watch mode in the whole project, run: "tsc --watch" OR "tsc -w".
//Video 36: Including & Excluding Files
//It is possible to tell TypeScript which files to compile,and which ones to ignore using the exclude & include options in tsconfig.json
//"exclude": ["node_modules"] //exclude property holds an array of file/folder names/paths that should not be watched.
//"include": ["src/"]  //include property holds an array of files/paths to check when compiling..
//Video 37: Setting a Compilation Target
//target within compilerOptions tells TypeScript which JavaScript version you'd like to compile your code into. 
//example:   "compilerOptions": { "target": "esnext" }
//Video 38: Understanding TypeScript Core Libs
/**  TypeScript includes a default set of type definitions for built-in JS APIs, as well as type
 *  definitions for things found in browser environments.TypeScript also includes APIs for newer JS
 *  features matching the target you specify. You can change these default using libs option in tsconfig.json**/
//Video 39: More Configuration & Compilation Options
// "allowJs": Allow JavaScript files to be a part of your program. 
// "checkJs": Enable error reporting in type-checked JavaScript files.
//Video 40: Working with Source Maps
/**Enables the generation of sourcemap files that allow debuggers to display the original
  TypeScript source code when actually working with the emitted JavaScript files.**/ 
