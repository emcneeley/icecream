const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: 1
}, {
    name: 'Chocolate Chips',
    quantity: 0,
    price: 2
}, {
    name: 'Gummy Worms',
    quantity: 0,
    price: 2,
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]





function chooseToppings(toppingName) {
    // I want to search the array for 'toppings'
    // I want to search the object for 'name of topping'
    let foundTopping = toppings.find(topping => topping.name == toppingName)
    foundTopping.quantity++
    console.log(foundTopping)
}

function chooseContainers(containerType) {
    let foundContainer = containers.find(container => container.name == containerType)
    console.log(foundContainer)
}

function chooseIceCream(iceCreamType) {
    let foundIceCream = iceCream.find(iceCream => iceCream.name == iceCreamType)
    console.log(foundIceCream)
}

function drawiceCream() {
    let total = 0
    iceCream.forEach(iceCream => iceCream.price == drawiceCream)

}

// I need a function that draws the choices to the page in the left hand column 
//I need to log the choices to the screen first 