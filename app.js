document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', function() {
        // Get the sanitized value from the search input field
        const searchTerm = sanitizeInput(document.getElementById('searchInput').value);

        // Fetch data from superheroes.php with the search term as a query parameter
        fetch(`superheroes.php?query=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
            // Display search results
            displaySearchResults(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    });

    function displaySearchResults(superheroes) {
      const resultContainer = document.getElementById('result');

      // Clear previous search results
      resultContainer.innerHTML = '';

      if (superheroes.length === 0) {
        // Display message if superhero not found
        resultContainer.innerHTML = '<p>Superhero not found</p>';
      } else if (superheroes.length === 1) {
        // Display detailed information for a single superhero
        const superhero = superheroes[0];
        resultContainer.innerHTML = `
          <h3>${superhero.alias}</h3>
          <h4>${superhero.name}</h4>
          <p>${superhero.biography}</p>
        `;
      } else {
        // Display a list of superheroes
        const list = document.createElement('ul');
        superheroes.forEach(superhero => {
          const listItem = document.createElement('li');
          listItem.textContent = `${superhero.name} (${superhero.alias}) - ${superhero.biography}`;
          list.appendChild(listItem);
        });
        resultContainer.appendChild(list);
      }
    }

    function sanitizeInput(input) {
      // Implement your own sanitization logic to prevent code injection
      // This is a basic example, and you might want to use a library for more robust sanitization
      return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});
