document.getElementById('convertBtn').addEventListener('click', function () {
    const inputVal = document.getElementById('tempInput').value.trim();
    const unit = document.getElementById('unitSelect').value;
    const errorMsg = document.getElementById('errorMsg');

    errorMsg.textContent = '';

    if (inputVal === '' || isNaN(inputVal)) {
        errorMsg.textContent = 'Please enter a valid numeric value.';
        return;
    }

    let temp = parseFloat(inputVal);
    let c = 0, f = 0, k = 0;

    if (unit === 'celsius') {
        if (temp < -273.15) {
            errorMsg.textContent = 'Below absolute zero (-273.15°C) is not possible!';
            return;
        }
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    } else if (unit === 'fahrenheit') {
        if (temp < -459.67) {
            errorMsg.textContent = 'Below absolute zero (-459.67°F) is not possible!';
            return;
        }
        c = (temp - 32) * 5/9;
        f = temp;
        k = c + 273.15;
    } else if (unit === 'kelvin') {
        if (temp < 0) {
            errorMsg.textContent = 'Kelvin temperature cannot be negative!';
            return;
        }
        k = temp;
        c = temp - 273.15;
        f = (c * 9/5) + 32;
    }

    document.getElementById('resC').textContent = c.toFixed(2) + ' °C';
    document.getElementById('resF').textContent = f.toFixed(2) + ' °F';
    document.getElementById('resK').textContent = k.toFixed(2) + ' K';
});