document.addEventListener("DOMContentLoaded", function () {
  
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  function fetchAndDisplayProducts() {

    const searchTerm = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;

    fetch("https://raw.githubusercontent.com/CynthiaEstherMetilda/Xhrdemo/main/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((products) => {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
        );

        if (sortBy === "name") {
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "price") {
          filteredProducts.sort((a, b) => a.price - b.price);
        }

        productList.innerHTML = "";

        filteredProducts.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.className = "product card";

          const productImage = document.createElement("img");
          productImage.className = "card-img-top";
          productImage.src = product.image;
          productImage.alt = product.name;

          const card_div = document.createElement("div");
          card_div.className = "card-body";

          const productName = document.createElement("h5");
          productName.className = "card-title"
          productName.textContent = product.name;

          const productDescription = document.createElement("p");
          productDescription.className = "card-text";
          productDescription.textContent = product.description;

          const productPrice = document.createElement("a");
          productPrice.className = "btn btn-primary";
          productPrice.textContent = `Price: $${product.price.toFixed(2)}`;


          productDiv.appendChild(productImage);
          productDiv.appendChild(card_div);
          card_div.appendChild(productName);
          card_div.appendChild(productDescription);
          card_div.appendChild(productPrice);
        
          productList.appendChild(productDiv);
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  searchInput.addEventListener("input", fetchAndDisplayProducts);
  sortSelect.addEventListener("change", fetchAndDisplayProducts);

  fetchAndDisplayProducts();
});

