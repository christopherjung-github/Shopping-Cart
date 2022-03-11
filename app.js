//Select Element
const productsEl = document.querySelector(".products");


//Render Products
function renderProducts(){
    products.forEach(function(product){
        productsEl.innerHTML += 
            `
                <div class="product">

                    <!-- image insert here -->
                    <img src="${product.imgSrc}">

                    <div class="product-info">

                        <h3 class="product-name">${product.name}</h3>

                        <h4 class="product-price"> <small>$</small> ${product.price}</h4>

                        <p class="product-quantity">Quantity: <input value="1" name="">

                        <p class="product-add">

                            <i class="fa fa-trash" aria-hidden="true"></i>

                            <span class="add" onclick = "addItem(${product.id})">Add to Cart</span>

                        </p>

                    </div>

                </div>
            `
    })
}
renderProducts();
//Cart Array
let cart = [];

//Add to Cart
var total_price = 0;
var total_item = 0;
function addItem(id){

    const item = products.find((product) => product.id === id);
    total_price += item.price;
    total_item++;

    document.getElementById("total-price").innerHTML = "$ " + total_price; 
    document.getElementById("total-items").innerHTML = total_item; 

    cart.push(item);
    console.log(cart);
    
}
