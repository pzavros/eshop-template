// Define the URL of the API you want to connect to
const apiUrl = 'https://fakestoreapi.com/products';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Use the data returned by the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('There was a problem with the fetch operation:', error);
  });
