"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//Video 41: rootDir & outDir
//"rootDir": Path to the folder containing ts files.
//"outDir": Path to the folder with compiled JavaScript files. 
//"removeComments": Disable emitting comments in generated js files.
//Video 42: Stop Emitting Files on Compilation Error
/** "noEmitOnError": If the value of this property is set to true, TypeScript will not generate
 *  output JavaScript file if there is any TypeScript error. **/
//Video 43:Strict Compilation
//"strict": Enable all strict type-checking options.
//"noImplicitAny": Enable error reporting for expressions and declarations with an implied 'any' type. .
//"strictNullChecks": When enabled, null and undefined have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected.
//"strictBindCallApply": Check that the arguments for 'bind', 'call', and 'apply' methods match the original function.
//Video 44: Code Quality Options
// "noUnusedLocals":Enable error reporting when local variables aren't read (without globals). 
// "noUnusedParameters": Enable error reporting when a function parameter isn't read. 
// "noImplicitReturns": When enabled, TypeScript will check all code paths in a function to ensure they return a value.
