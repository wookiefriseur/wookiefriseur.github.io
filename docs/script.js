const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// ai generated dummy
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
            searchResults.innerHTML = '';
            filteredData.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name;
                searchResults.appendChild(listItem);
            });
        });
    });
