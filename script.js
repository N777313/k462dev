const API_URL = "https://89e2-212-46-56-10.ngrok-free.app/products/";


async function loadProducts() {

    const response = await fetch(API_URL);

    const products = await response.json();


    const container =
        document.getElementById("products");


    container.innerHTML = "";


    products.forEach(product => {


        container.innerHTML += `

        <div class="product">

            <h2>
                ${product.name}
            </h2>


            <p>
                ${product.description ?? ""}
            </p>


            <h3>
                $${product.price}
            </h3>


            <p>
                Category:
                ${product.category ?? ""}
            </p>


        </div>

        `;

    });

}


loadProducts();
