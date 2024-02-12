let products = [];


let data = [

    {
        name: "Tornillo",
        price: 2,
        quantity: 0,
        productId: 1,
        image: "./images/tornillo.jpg"
    },
    
    {
        name: "Tuerca",
        price: 1,
        quantity: 0,
        productId: 2,
        image: "./images/tuerca.jfif"
    },
    
    {
        name: "Destornillador",
        price: 5,
        quantity: 0,
        productId: 3,
        image: "./images/destornillador.png"
    }

];

data.forEach((data)=>products.push(data));




let cart = [];

function addProductToCart (productId){
    let product;
    products.forEach((element)=>{if(element.productId==productId){
        product=element;
    }});
    product.quantity+=1;
    if(!cart.includes(product)){
        cart.push(product);
    }
};

function increaseQuantity (productId){
    let product;
    cart.forEach((element)=>{if(element.productId==productId){
        product=element;
    }});
    product.quantity+=1;
}

function decreaseQuantity (productId){
    let product;
    cart.forEach((element)=>{if(element.productId==productId){
        product=element;
    }});
    product.quantity-=1;
    
    
    if(product.quantity==0){
        let index=cart.indexOf(product);
        cart.splice(index,1);
    };
}

function removeProductFromCart (productId){
    let product;
    cart.forEach((element)=>{if(element.productId==productId){
        product=element;
    }});
    product.quantity=0;
    let index=cart.indexOf(product);
    cart.splice(index,1);
}

function cartTotal (){
    let total = 0;
    cart.forEach((product)=>total+=(product.price*product.quantity))
    return total
}

function emptyCart(){
    cart=[]
}

function pay (amount){
    let pay = amount - cartTotal();
    return pay
}



// probar funciones

addProductToCart(1);
addProductToCart(2);
addProductToCart(3);
addProductToCart(2);
increaseQuantity(3);











// INSERTAR EN HTML


function insertProducts (product){
    const div = document.querySelector("#products");
    div.insertAdjacentHTML(
        "beforeend",
        `<div class="product-item">
        <img class="product-image" src=${product.image} alt=${product.image}>
        <p class="product-text">${product.name}</p>
        <p class="product-text">price: $${product.price}</p>
        <button class="add-button" type="button">Add to cart</button>
        </div>`
    )
}

products.forEach((product)=>insertProducts(product));

function insertCartProducts (product){
    const div = document.querySelector("#cart");
    div.insertAdjacentHTML(
        "beforeend",
        `<div class="cart-item">
        <p class="product-name">${product.name}</p>
        <p class="product-text">price: $${product.price}</p>
        <p class="product-text">quantity: ${product.quantity}</p>
        <button class="increase-button" type="button">+</button>
        <button class="decrease-button" type="button">-</button>
        <button class="remove-button" type="button">REMOVE</button>
        </div>`
    )
}

cart.forEach((product)=>insertCartProducts(product));
