// public/script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('arithmeticForm');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const num1 = parseFloat(formData.get('num1'));
        const num2 = parseFloat(formData.get('num2'));
        const operation = formData.get('operation');

        fetch(`/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2, operator: operation }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response data to console for debugging
            const result = data.result; // Access the correct property of the data object
            outputDiv.textContent = `Result: ${result}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
