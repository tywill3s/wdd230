// Define the URL of the JSON file
const url = './json/data.json';

// Fetch the JSON data and render it on the page
fetch(url)
  .then(response => response.json())
  .then(data => {
    const listView = document.getElementById('list-view');
    const cardView = document.getElementById('card-view');
    const listViewButton = document.getElementById('list-view-button');
    const gridViewButton = document.getElementById('grid-view-button');

    // Set the initial view
    let currentView = 'list';
    listView.style.display = 'block';
    cardView.style.display = 'none';
    listViewButton.classList.add('active');

    // Add event listeners to the view buttons
    listViewButton.addEventListener('click', () => {
      if (currentView !== 'list') {
        listView.style.display = 'block';
        cardView.style.display = 'none';
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
        currentView = 'list';
      }
    });

    gridViewButton.addEventListener('click', () => {
      if (currentView !== 'grid') {
        listView.style.display = 'none';
        cardView.style.display = 'grid';
        listViewButton.classList.remove('active');
        gridViewButton.classList.add('active');
        currentView = 'grid';
      }
    });


    // Render the initial view
    data.forEach(company => {
      // Create list view item
      const listItem = document.createElement('div');
      listItem.className = 'list-item';
      listItem.innerHTML = `
        <p><strong>${company.name}</strong> | ${company.address} | ${company.phone} | ${company.website}</p>
      `;
      listView.appendChild(listItem);

      // Create card view item
      const cardItem = document.createElement('div');
      cardItem.className = 'card-item';
      cardItem.innerHTML = `
        <img src="${company.icon}" alt="${company.name}">
        <div class="card-details">
          <h2>${company.name}</h2>
          <p>${company.address}</p>
          <p>${company.phone}</p>
          <p>${company.website}</p>
        </div>
      `;
      cardView.appendChild(cardItem);
    });
  });
