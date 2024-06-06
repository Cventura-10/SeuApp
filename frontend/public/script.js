// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10, description: "Description 1", image: "/assets/images/image1.jpg" },
  { id: 2, name: "Product 2", price: 20, description: "Description 2", image: "/assets/images/image2.jpg" },
  { id: 3, name: "Product 3", price: 30, description: "Description 3", image: "/assets/images/image3.jpg" }
];

// Function to render the product list
function renderProductList(products) {
  const productList = document.getElementById("productList");
  if (productList) {
    productList.innerHTML = "";

    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const imageElement = document.createElement("img");
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);

      const nameElement = document.createElement("h3");
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: $${product.price}`;
      productElement.appendChild(priceElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Description: ${product.description}`;
      productElement.appendChild(descriptionElement);

      productList.appendChild(productElement);
    });
  }
}

// Function to handle the form submission
async function handleAddProduct(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
    description: description,
    image: image
  };

  try {
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Product added:', responseData);
    
    products.push(newProduct);
    renderProductList(products);
    event.target.reset();
  } catch (error) {
    console.error('Error adding product:', error);
    // Handle the error in the UI, such as showing an error message
  }
}

// Event listener for the form submission
const addProductForm = document.getElementById("addProductForm");
if (addProductForm) {
  addProductForm.addEventListener("submit", handleAddProduct);
}

// Initial render of the product list
renderProductList(products);
