function appendToDisplay(value) {
    var display = document.getElementById('display');
    if (display instanceof HTMLInputElement) {
        display.value += value;
    }
}
function clearDisplay() {
    var display = document.getElementById('display');
    if (display instanceof HTMLInputElement)
        display.value = '';
}
function calculateResult() {
    var display = document.getElementById('display');
    if (display instanceof HTMLInputElement) {
        try {
            // Évaluation de l'expression (veillez à être prudent avec eval)
            display.value = eval(display.value).toString();
        }
        catch (_a) {
            display.value = 'Erreur';
        }
    }
}
