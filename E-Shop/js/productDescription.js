document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');
  
    if (productId) {
      // Fetch product details based on the product ID
      const apiUrl = `https://fakestoreapi.com/products/${productId}`;
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(product => {
          // Display product details on the page
          const productDetailsContainer = document.getElementById('product-details');
          const imageElement = document.createElement('img');
          const titleElement = document.createElement('h2');
          const priceElement = document.createElement('p');
          const descriptionElement = document.createElement('p');
  
          imageElement.src = product.image;
          titleElement.textContent = product.title;
          priceElement.textContent = `Price: $${product.price}`;
          descriptionElement.textContent = product.description;
  
          productDetailsContainer.appendChild(imageElement);
          productDetailsContainer.appendChild(titleElement);
          productDetailsContainer.appendChild(priceElement);
          productDetailsContainer.appendChild(descriptionElement);
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
        });
    } else {
      console.log('Product ID not found in URL');
    }
  });
