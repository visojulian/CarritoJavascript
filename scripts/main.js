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
    const div = document.querySelector("#cart");
    div.innerHTML="";
    cart.forEach((product)=>insertCartProducts(product));

    removeCartButtons()

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


    const div = document.querySelector("#cart");
    div.innerHTML="";
    cart.forEach((product)=>insertCartProducts(product));

    removeCartButtons()

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


// INSERTAR EN HTML


function insertProducts (product){
    const div = document.querySelector("#products");
    div.insertAdjacentHTML(
        "beforeend",
        `<div class="product-item">
        <img class="product-image" src=${product.image} alt=${product.image}>
        <p class="product-text">${product.name}</p>
        <p class="product-text">price: $${product.price}</p>
        <button class="add-button" id="add-button${product.productId}" type="button">Add to cart</button>
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
        <button class="remove-button" id="remove-button${product.productId}" type="button">REMOVE</button>
        </div>`
    )
}


//Funciones y botones

let addToCartButtons = []

products.forEach((product)=>
addToCartButtons.push(document.getElementById(`add-button${product.productId}`))
)

addToCartButtons.forEach((button, index)=>
    button.addEventListener("click",()=>addProductToCart(products[index].productId))
)


function removeCartButtons (){

    let removeCartButtons = []
    cart.forEach((product)=>
    removeCartButtons.push(document.getElementById(`remove-button${product.productId}`))
    )
    
    removeCartButtons.forEach((button, index)=>
    button.addEventListener("click",()=>removeProductFromCart(products[index].productId))
    )
    
    console.log(removeCartButtons)
}










