document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://fakestoreapi.com/products';
    const dataDiv = document.getElementById('API-Data');
    const menCheckbox = document.querySelector('input[name="men"]');
    const womenCheckbox = document.querySelector('input[name="women"]');

    // Function to filter products by category
    function filterProducts(category) {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Clear the existing products
                dataDiv.innerHTML = '';

                // Loop through the array of products
                data.forEach(product => {w
                    if (product.category === category) {
                        // Create and append product elements (similar to your existing code)
                        const productContainer = document.createElement('div');
                        const imageElement = document.createElement('img');
                        const titleElement = document.createElement('h2');
                        const priceElement = document.createElement('p');
                        const descriptionElement = document.createElement('p');

                        // Set attributes and content for the elements based on the product data

                        // Append elements to the product container

                        // Append the product container to the dataDiv
                    }
                });
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }

    // Event listeners for checkboxes
    menCheckbox.addEventListener('change', function () {
        if (menCheckbox.checked) {
            filterProducts("Men's clothing");
        }
    });

    womenCheckbox.addEventListener('change', function () {
        if (womenCheckbox.checked) {
            filterProducts("Women's clothing");
        }
    });

    // Initial fetch to load all products
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Loop through the array of products and display all initially
            data.forEach(product => {
                // Create and append product elements (similar to your existing code)
                const productContainer = document.createElement('div');
                const imageElement = document.createElement('img');
                const titleElement = document.createElement('h2');
                const priceElement = document.createElement('p');
                const descriptionElement = document.createElement('p');

                // Set attributes and content for the elements based on the product data

                // Append elements to the product container

                // Append the product container to the dataDiv
            });
        })
        .catch(error => {
            console.error('Error: ', error);
        });
});
