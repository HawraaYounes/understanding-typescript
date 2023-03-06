"use strict";
function displayData(a) {
    return a;
}
console.log(displayData("Hello World!"));
console.log(displayData(12345));
function getLength(a) {
    return a.length;
}
console.log(getLength([2, 3, 7, 1, 9]));
console.log(getLength("GUESS MY LENGTH!"));
function getProperty(obj, key) {
    return obj[key];
}
let ob = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(ob, "a"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=generics.js.map