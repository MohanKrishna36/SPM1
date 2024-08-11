document.getElementById('experienceForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
      company: document.getElementById('company').value,
      role: document.getElementById('role').value,
      package: document.getElementById('package').value,
      topics: document.getElementById('topics').value,
      criteria: document.getElementById('criteria').value,
      preparation: document.getElementById('preparation').value,
      interviewQuestions: document.getElementById('interviewQuestions').value
  };

  fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
      alert('Your experience has been submitted successfully!');
      document.getElementById('experienceForm').reset();
  })
  .catch((error) => {
      alert('Error: Unable to submit your experience. Please try again later.');
      console.error('Error:', error);
  });
});
