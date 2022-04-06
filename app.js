//Select Element
const productsEl = document.querySelector(".products");
const cartItems = document.querySelector(".cart-items")

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

                        <p class="product-quantity">Quantity: 
                        <input type="number" value="1" min="1" id="quantity-input-${product.id}")>

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
let cartExists = [];
//Add to Cart
var total_price = 0;
var total_item = 0;
var number_of_items = 0;

function addItem(id){

    const item = products.find((product) => product.id === id);
    //input field id is "quantity-input-" + product id
    const quantity_id = "quantity-input-" + item.id;
    const quantity = parseInt(document.getElementById(quantity_id).value);

    total_price = total_price + (item.price * quantity); 
    total_item += quantity;

    document.getElementById("total-price").innerHTML = "$ " + total_price; 
    document.getElementById("total-items").innerHTML = total_item; 
    
    for (let i = 0; i < quantity; i++)
        cart.push(item);

    if (!cartExists.includes(item))
        cartExists.push(item);
    
    renderCart();

    var total_quantity = 0;

    //  iterate through the cart to find the total number of specific item
    for (let i = 0; i < cart.length; i++) {
        if (cart[i] == item) {
            total_quantity++;
        }
    }

    total_cost = total_quantity * item.price;

    document.getElementById("total-price-" + item.id).innerHTML = total_cost;
    document.getElementById("total-item-" + item.id).innerHTML = total_quantity;
    //console.log(cart);
}

function renderCart() {
    cartExists.forEach(function(item) {
        var element = document.getElementById("total-item-" + item.id)

        //  if the element already exists, return and do nothing
        if (typeof(element) != 'undefined' && element != null) {
            return;
        }
        //  add entry if it doesn't exist
        else {
            cartItems.innerHTML +=    
                `
                    <div class="cart-product-info-${item.id}">

                        <p class="cart-product-name-${item.id}">${item.name}</p>

                        <p class="cart-product-price"> <small>$</small> ${item.price}</p>

                        <p>	<span>Total Item</span>	<span id = "total-item-${item.id}">0</span>	</p>
                        <p>	<span>Total Price</span>	<span id = "total-price-${item.id}">$0</span>	</p>
                    </div>

                `
        }
    })
}


