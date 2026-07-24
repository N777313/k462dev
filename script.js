console.log("SCRIPT LOADED 771");

const API_URL = "https://4d97-212-46-56-10.ngrok-free.app/products/";


async function loadProducts() {

    console.log("START LOAD");


    const response = await fetch(API_URL);

    console.log("STATUS:", response.status);


    const products = await response.json();

    console.log("PRODUCTS:", products);


    const container = document.getElementById("products");

    console.log("CONTAINER:", container);


    container.innerHTML = "";


    products.forEach(product => {

        container.innerHTML += `

        <div class="product">

            <h2>${product.name}</h2>

            <p>${product.description ?? ""}</p>

            <h3>$${product.price}</h3>

            <p>
                Category: ${product.category ?? ""}
            </p>

        </div>

        `;

    });

}


loadProducts();
