var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj={itemName: item ,itemPrice:Math.floor(Math.random() * 100) + 1}
 cart.push(obj);
 return(`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  if(cart.length>0){
    var arr=[];
    for(let i=0;i<cart.length-1;i++){
    arr.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    return(`In your cart, you have ${arr},and ${arr[length-1]}.`)
    }
    else return("Your shopping cart is empty.")

  }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
