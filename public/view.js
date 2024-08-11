// document.addEventListener('DOMContentLoaded', function() {
//   fetch('/getExperiences')
//       .then(response => response.json())
//       .then(data => {
//           const tableBody = document.getElementById('experiences');
//           if (data.length === 0) {
//               tableBody.innerHTML = '<tr><td colspan="7">No experiences have been shared yet.</td></tr>';
//           } else {
//               data.forEach(experience => {
//                   const row = document.createElement('tr');
//                   row.innerHTML = `
//                       <td>${experience.company}</td>
//                       <td>${experience.role}</td>
//                       <td>${experience.package} LPA</td>
//                       <td>${experience.topics}</td>
//                       <td>${experience.criteria}</td>
//                       <td>${experience.preparation}</td>
//                       <td>${experience.interviewQuestions || 'N/A'}</td>
//                   `;
//                   tableBody.appendChild(row);
//               });
//           }
//       })
//       .catch(error => {
//           console.error('Error fetching experiences:', error);
//           document.getElementById('experiences').innerHTML = '<tr><td colspan="7">Error loading experiences. Please try again later.</td></tr>';
//       });
// });







document.addEventListener('DOMContentLoaded', function() {
    fetch('/getExperiences')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('experiences');
            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="8">No experiences have been shared yet.</td></tr>';
            } else {
                data.forEach(experience => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${experience.year}</td>
                        <td>${experience.company}</td>
                        <td>${experience.package} LPA</td>
                        <td>${experience.topics}</td>
                        <td>${experience.criteria}</td>
                        <td>${experience.preparation}</td>
                        <td>${experience.interview}</td>
                        <td>${experience.email || 'N/A'}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching experiences:', error);
            document.getElementById('experiences').innerHTML = '<tr><td colspan="8">Error loading experiences. Please try again later.</td></tr>';
        });
});

