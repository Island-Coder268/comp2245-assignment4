document.getElementById('searchButton').addEventListener('click', function() {
  fetch('superheroes.php')
    .then(response => response.text())  // Change response type to text
    console.log(response.text())
    .then(data => {alert(data)
    });
});
