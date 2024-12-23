function appendToResult(value) {
    document.getElementById('result').value += value;
}
function calculate() {
    try {
        var result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
function clearResult() {
    document.getElementById('result').value = '';
}