console.log('Yamato Cannon On-Line')

const iceCream = [{id: 1, name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1}, 
{id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1}, 
{id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2}]


const vessels = [{id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2}, 
{id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4}]

const toppings = [{id: 6, name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1}, 
{id: 7, name: 'Choclate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2}]

let cart = []

let total = 0




function drawIceCream(){
    let template = ''
    iceCream.forEach(flavor => {
        template += /*html*/`
        <div class="col-md-12 col-lg-3">
        <div class="card"></div>
        <img class="imgg" src="${flavor.image}" alt="">
        <h3>${flavor.name}</h3>
        <h4>${flavor.price}</h4>
        <button onclick="addCart(${flavor.id})" >Add to Diabetes</button>
    </div>
    `
    });
    // console.log('template working?', template)
    document.getElementById('IceCream').innerHTML = template 
}

function drawVessels(){
    let template = ''
    vessels.forEach(cone => {
        template += /*html*/`
        <div class="col-md-12 col-lg-6">
        <div class="card"></div>
        <img class="imgg" src="${cone.image}" alt="">
        <h3>${cone.name}</h3>
        <h4>${cone.price}</h4>
        <button onclick="addCart(${cone.id})" >Add to Diabetes</button>
    </div>
        ` 
    });
    // console.log('vessels on line?', template)
    document.getElementById('Vessels').innerHTML = template
}

function drawToppings(){
    let template = ''
    toppings.forEach(extra => {
        template += /*html*/`
        <div class="col-md-12 col-lg-6">
        <div class="card"></div>
        <img class="imgg" src="${extra.image}" alt="">
        <h3>${extra.name}</h3>
        <h4>${extra.price}</h4>
        <button onclick="addCart(${extra.id})" >Add to Diabetes</button>
    </div>
        ` 
    });
    // console.log('extras on line?', template)
    document.getElementById('Toppings').innerHTML = template

}

function addCart(itemId){
    // console.log('we are not alone', itemId);

let foundFlavor = iceCream.find(flavor => flavor.id == itemId)
if(foundFlavor){
    cart.push(foundFlavor)
    // console.log('cart?', cart);
drawCart()
return
}

let foundCone = vessels.find(cone => cone.id == itemId)
if(foundCone){
cart.push(foundCone)
// console.log('cart?', cart);
drawCart()
return
}

let foundExtra = toppings.find(extra => extra.id == itemId)
if(foundExtra){
cart.push(foundExtra)
// console.log('cart?', cart);
drawCart()
return
}
}

function drawCart(){
    let template = ''
    let total = 0
    cart.forEach((item, index) => { template += /*html*/ `
    <div class="col-12 d-flex">
    <h5>${item.name}</h5>
    <h5>${item.price}</h5>
    <button onclick="removeItem(${index})"> </button>
    </div>
    
    
    `
    total += item.price
    })
    // console.log('cart??', template)
    document.getElementById('Cart').innerHTML = template
    document.getElementById('total').innerText = total.toString()
}

function removeItem(index){
const removedItem = cart[index]
total -= removeItem.price
cart.splice(index, 1)
// console.log('after splice', cart)
drawCart()
}

drawIceCream()
drawVessels()
drawToppings()