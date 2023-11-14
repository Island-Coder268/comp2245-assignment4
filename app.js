document.getElementById('searchButton').addEventListener('click', function() {
  fetch('superheroes.php')
    .then(response => response.text())  // Change response type to text
    .then(data => {alert(data)
    });
});
