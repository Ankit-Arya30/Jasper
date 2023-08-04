document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data for meditation centers
  fetch('meditation-centers.json')
    .then((response) => response.json())
    .then((data) => {
      const meditationCentersContainer = document.querySelector('.featured-meditation-centers ul');

      // Function to filter meditation centers based on keywords and location
      function filterMeditationCenters() {
        const keywordsInput = document.getElementById('keywords').value.toLowerCase();
        const locationInput = document.getElementById('location').value.toLowerCase();

        // Clear the current meditation center listings before applying the filter
        meditationCentersContainer.innerHTML = '';

        data.meditationCenters.forEach((center) => {
          // Check if keywords and location match the user input
          if (
            center.centerName.toLowerCase().includes(keywordsInput) &&
            center.location.toLowerCase().includes(locationInput)
          ) {
            // Create the elements for meditation center listing
            const centerItem = document.createElement('li');
            const centerName = document.createElement('h3');
            const description = document.createElement('p');
            const contactLink = document.createElement('a');

            // Set the content for meditation center elements
            centerName.textContent = center.centerName;
            description.textContent = center.description;
            contactLink.textContent = 'Contact';
            contactLink.href = center.contactLink;

            // Append meditation center elements to the center item
            centerItem.appendChild(centerName);
            centerItem.appendChild(description);
            centerItem.appendChild(contactLink);

            // Append center item to the meditation centers container
            meditationCentersContainer.appendChild(centerItem);
          }
        });
      }

      // Event listener for the filter button click
      document.getElementById('filterBtn').addEventListener('click', filterMeditationCenters);

      // Initially, load all meditation centers without any filters applied
      filterMeditationCenters();
    })
    .catch((error) => console.error('Error fetching JSON data:', error));
});
