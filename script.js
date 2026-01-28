let myDishes = {
    "Burger": [
    {
        "Image" : "./assets/img/Burger_1.png",
        "name" : "Veggie mushroom black burger",
        "description": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "price": 16.90
    },
    {
        "Image" : "./assets/img/Burger_2.png",
        "name" : "All meat Burger",
        "description": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        "price": 15.90
    },
    {
        "Image" : "./assets/img/Burger_3.png",
        "name" : "Beef red Burger",
        "description": "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "price": 14.90
    },
    {
        "Image" : "./assets/img/Burger_4.png",
        "name" : "Big chicken burger",
        "description": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        "price": 15.90
    }
    ],

    "Pizza": [
    {
        "Image" : "./assets/img/Pizza_1.png",
        "name" : "Pizza Margherita",
        "description": "Tomato Sauce, Mozzarella",
        "price": 11.90
    },
    {
        "Image" : "./assets/img/Pizza_2.png",
        "name" : "Pizza Chorizo",
        "description": "Tomato slices, Mozzarella, Chorizo",
        "price": 13.90
    },
    {
        "Image" : "./assets/img/Pizza_3.png",
        "name" : "Pizza Funghi",
        "description": "Red onion, Olives, Button Mashrooms, Mozzarella",
        "price": 12.90
    },
    {
        "Image" : "./assets/img/Pizza_4.png",
        "name" : "Pizza Quattro Formaggi with Chicken",
        "description": "Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano",
        "price": 15.90
    }
    ],
    
    "Salad": [
    {
        "Image" : "./assets/img/Salad_1.png",
        "name" : "Warm beef arugula salad",
        "description": "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried tomatoes, Balsamic-vinegar dressing",
        "price": 16.90
    },
    {
        "Image" : "./assets/img/Salad_2.png",
        "name" : "Mini green Salad",
        "description": "Green salad, Cucumber, Carrots, Parsley, Radishes",
        "price": 7.90
    },
    {
        "Image" : "./assets/img/Salad_3.png",
        "name" : "Green Salad with sea food",
        "description": "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        "price": 16.90
    },
    {
        "Image" : "./assets/img/Salad_4.png",
        "name" : "Vegan green salad with tofu",
        "description": "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
        "price": 14.90
    }
    ],
}

console.log(myDishes.Pizza[1].name);
console.log(myDishes.Salad[2].Image);


function renderAllDishes(){
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
    for (let indexSalad = 0; indexSalad < myDishes.Pizza.length; indexSalad++) {
        saladRef.innerHTML += getSaladDishes(indexSalad);        
    }
}