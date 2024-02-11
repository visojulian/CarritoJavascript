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
        image: "./images/tuerca.jpg"
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




// addProductToCart(1);
// addProductToCart(2);
// addProductToCart(3);


// cartTotal()


// console.log(cart);
// console.log(cartTotal())
// console.log(pay(5))







