"use strict";
const form = document.querySelector('form');
const addresInput = document.querySelector("address");
function searchAddress(e) {
    e.preventDefault();
    const address = addresInput.value;
}
form.addEventListener("submit", searchAddress);
//# sourceMappingURL=app.js.map