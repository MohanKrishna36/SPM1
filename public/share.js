document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shareForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const experience = {
            year: document.getElementById('year').value,
            company: document.getElementById('company').value,
            package: document.getElementById('package').value,
            topics: document.getElementById('topics').value,
            criteria: document.getElementById('criteria').value,
            preparation: document.getElementById('preparation').value,
            interview: document.getElementById('interview').value,
            email: document.getElementById('email').value || null
        };

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(experience)
        })
        .then(response => response.json())
        .then(data => {
            alert('Your experience has been submitted successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error submitting experience:', error);
            alert('There was an error submitting your experience. Please try again.');
        });
    });
});
