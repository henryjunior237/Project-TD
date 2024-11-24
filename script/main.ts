function appendToDisplay(value: string) {
    const display = document.getElementById('display');
    if (display instanceof HTMLInputElement) {
        display.value += value;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    if (display instanceof HTMLInputElement) 
        display.value = '';
    }


function calculateResult() {
    const display = document.getElementById('display');
    if (display instanceof HTMLInputElement) {
        try {
            // Évaluation de l'expression (veillez à être prudent avec eval)
            display.value = eval(display.value).toString();
        } catch {
            display.value = 'Erreur';
        }
    }
}