document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here

const apiUrl = 'https://fakestoreapi.com/products';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const dataDiv = document.getElementById('API-Data');

    // Loop through the array of products
    data.forEach(product => {
      // Create HTML elements for each product
      const productContainer = document.createElement('div');
      const imageElement = document.createElement('img');
      const titleElement = document.createElement('h2');
      const priceElement = document.createElement('p');
      const descriptionElement = document.createElement('p');
      const buttonElement = document.createElement('button');
      
      //Set attributes 
      productContainer.setAttribute('class','grid-item');
      imageElement.setAttribute('class','product_image');
      titleElement.setAttribute('class','product_title');
      priceElement.setAttribute('class', 'product_price');
      descriptionElement.setAttribute('class','product_description');
      buttonElement.setAttribute('class', 'buy_button');

      


      // Set content for the elements based on the product data
      imageElement.src = product.image;
      titleElement.textContent = product.title;
      priceElement.textContent = `Price: $${product.price}`;
      descriptionElement.textContent = product.description;
      buttonElement.textContent = 'Add to Cart';
      buttonElement.onsubmit = 

    // Add a click event listener to the button
    buttonElement.addEventListener('click', function () {
    const productId = product.id; // Get the product ID
  
    // Redirect to another page with the product ID as a query parameter
    window.location.href = `cart.html?product_id=${productId}`;
  });

      // Append elements to the product container
      productContainer.appendChild(imageElement);
      productContainer.appendChild(titleElement);
      productContainer.appendChild(priceElement);
      productContainer.appendChild(descriptionElement);
      dataDiv.appendChild(productContainer);
      productContainer.appendChild(buttonElement);
    });
  })
  .catch(error => {
    console.error('Error: ', error);
  });

});