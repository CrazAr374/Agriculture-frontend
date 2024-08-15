document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('dataChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Crop Yield',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    document.getElementById('initial-data-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Initial data submitted!');
    });

    document.querySelectorAll('.data-source button').forEach(button => {
        button.addEventListener('click', function() {
            alert(`${this.parentElement.querySelector('h3').textContent} selected!`);
        });
    });

    document.getElementById('final-submit').addEventListener('click', function() {
        alert('Data analysis configuration submitted!');
    });
});