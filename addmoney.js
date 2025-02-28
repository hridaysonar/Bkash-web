

document.getElementById('Add-money').addEventListener('click', function(event) {
   
    event.preventDefault();

    const amount = document.getElementById('Amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('Pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-blance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        if (!isNaN(convertedAmount) && convertedAmount > 0) {
            const newBalance = convertedMainBalance + convertedAmount;
            document.getElementById('main-blance').innerText = newBalance.toFixed(2); 
        } else {
            alert('Please enter a valid amount');
        }
    } else {
        alert('Incorrect PIN');
    }
});
