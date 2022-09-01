let countEl = document.getElementById("count");
let savedEl = document.getElementById("savepara");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}
function save() {
    countDash = count + " - "
    savedEl.textContent += countDash;
    count = 0;
    countEl.textContent = 0;
}
function subtract() {
    count -= 1;
    countEl.textContent = count;
}

function cleared() {
    savedEl.textContent = "SAVED: ";
}