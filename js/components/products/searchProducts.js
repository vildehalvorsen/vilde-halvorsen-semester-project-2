import { createHtml } from "./createHtml.js";

export function searchProducts(products) {
    const searchInput = document.querySelector("#search");
    const productsContainer = document.querySelector(".products__container");

    searchInput.onkeyup = function() {
        const searchTitle = event.target.value.trim().toLowerCase();
        const searchDescription = event.target.value.toLowerCase();

        const filteredProducts = products.filter(product => {
            if (product.title.toLowerCase().includes(searchTitle) || product.description.toLowerCase().includes(searchDescription)) {
                return true;
            }


        });

        createHtml(filteredProducts);

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = "No products matches your search...";
        }
    }
}