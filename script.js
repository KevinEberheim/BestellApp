let myDishes = {
    "Burger": [
        {
            "Image": "./assets/img/Burger_1.png",
            "name": "Veggie mushroom black burger",
            "description": "Mixed green salad, Tomatoes, Edame, Mushrooms",
            "price": 16.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Burger_2.png",
            "name": "All meat Burger",
            "description": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
            "price": 15.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Burger_3.png",
            "name": "Beef red Burger",
            "description": "Beef, Cheese, Tomatoes, Lettuce, Onion",
            "price": 14.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Burger_4.png",
            "name": "Big chicken burger",
            "description": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
            "price": 15.90,
            "amount": 1
        }
    ],

    "Pizza": [
        {
            "Image": "./assets/img/Pizza_1.png",
            "name": "Pizza Margherita",
            "description": "Tomato Sauce, Mozzarella",
            "price": 11.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Pizza_2.png",
            "name": "Pizza Chorizo",
            "description": "Tomato slices, Mozzarella, Chorizo",
            "price": 13.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Pizza_3.png",
            "name": "Pizza Funghi",
            "description": "Red onion, Olives, Button Mashrooms, Mozzarella",
            "price": 12.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Pizza_4.png",
            "name": "Pizza Quattro Formaggi with Chicken",
            "description": "Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano",
            "price": 15.90,
            "amount": 1
        }
    ],

    "Salad": [
        {
            "Image": "./assets/img/Salad_1.png",
            "name": "Warm beef arugula salad",
            "description": "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried tomatoes, Balsamic-vinegar dressing",
            "price": 16.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Salad_2.png",
            "name": "Mini green Salad",
            "description": "Green salad, Cucumber, Carrots, Parsley, Radishes",
            "price": 7.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Salad_3.png",
            "name": "Green Salad with sea food",
            "description": "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
            "price": 16.90,
            "amount": 1
        },
        {
            "Image": "./assets/img/Salad_4.png",
            "name": "Vegan green salad with tofu",
            "description": "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
            "price": 14.90,
            "amount": 1
        }
    ],
}

let myBasketDishes = [];

function renderAllDishes() {
    let burgerRef = document.getElementById('burgerDishes');
    burgerRef.innerHTML = "";
    for (let indexBurger = 0; indexBurger < myDishes.Burger.length; indexBurger++) {
        burgerRef.innerHTML += getBurgerDishes(indexBurger);
    }

    let pizzaRef = document.getElementById('pizzaDishes');
    pizzaRef.innerHTML = "";
    for (let indexPizza = 0; indexPizza < myDishes.Pizza.length; indexPizza++) {
        pizzaRef.innerHTML += getPizzaDishes(indexPizza);
    }

    let saladRef = document.getElementById('saladDishes');
    saladRef.innerHTML = "";
    for (let indexSalad = 0; indexSalad < myDishes.Salad.length; indexSalad++) {
        saladRef.innerHTML += getSaladDishes(indexSalad);
    }

    updateBasketView();
}


function pushToBasket(index, categoryName) {
    let dishes = myDishes[categoryName][index];

    let existingIndex = myBasketDishes.findIndex(item => item.name === dishes.name);

    if (existingIndex !== -1) {
        myBasketDishes[existingIndex].amount++;
    }
    else {
        myBasketDishes.push({ ...dishes, category: categoryName });
    }
    renderAllDishes();
    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    for (let i = 0; i < myBasketDishes.length; i++) {

        if (myBasketDishes[i].amount > 1) {
            basketRef.innerHTML += getBasketDishesAmount(i);
        }
        else {
            basketRef.innerHTML += getBasketDishes(i);
        }
    }
    updateBasketView();
    renderPrices();
    renderAllDishes();
}

function increaseAmount(index) {
    myBasketDishes[index].amount++;
    renderBasket();
}

function decreaseAmount(index) {
    if (myBasketDishes[index].amount > 1) {
        myBasketDishes[index].amount--;
    }
    else{
        myBasketDishes.splice(index, 1);
    }
    renderBasket();
}

function removeFromBasket(index) {
    myBasketDishes[index].amount = 1;
    myBasketDishes.splice(index, 1);
    renderBasket();
}

function renderPrices() {
    let subTotalRef = document.getElementById('subtotal')
    let totalRef = document.getElementById('total')
    let deliveryFeeRef = document.getElementById('deliveryFee')
    let buyNowRef = document.getElementById('buyNow')
    let subtotal = 0
    let deliveryFee = 4.99

    for (let dish of myBasketDishes) {
        subtotal += dish.price * dish.amount;
    }

    let total = subtotal + deliveryFee;

    subTotalRef.innerHTML = `${subtotal.toFixed(2)}€`;
    deliveryFeeRef.innerHTML = `${deliveryFee.toFixed(2)}€`;
    totalRef.innerHTML = `${total.toFixed(2)}€`;
    buyNowRef.innerHTML = `Buy Now (${total.toFixed(2)}€)`;
}

function updateBasketView() {
    let basketEmpty = document.getElementById('basketEmpty');
    let basketFilled = document.getElementById('basketFilled');

    if (myBasketDishes.length === 0) {
        basketEmpty.style.display = 'block';
        basketFilled.style.display = 'none';
    } else {
        basketEmpty.style.display = 'none';
        basketFilled.style.display = 'block';
    }
}
