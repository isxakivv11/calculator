var result = document.getElementById("result");

function insertChar(char) {
    result.value += char;
}

function clearResult() {
    result.value = "";
}

function deleteChar() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    result.value = eval(result.value);
}