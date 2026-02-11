function getBurgerDishes(indexBurger) {
    return ` <div class="dishes">
                <img src="${myDishes.Burger[indexBurger].Image}" alt="Burger${indexBurger}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes.Burger[indexBurger].name}</h3>
                    <span>${myDishes.Burger[indexBurger].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes.Burger[indexBurger].price.toFixed(2)}€</h3>
                    ${getDishButton(indexBurger, 'Burger')}
                </div>
            </div>`;
}

function getPizzaDishes(indexPizza) {
    return ` <div class="dishes">
                <img src="${myDishes.Pizza[indexPizza].Image}" alt="Pizza${indexPizza}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes.Pizza[indexPizza].name}</h3>
                    <span>${myDishes.Pizza[indexPizza].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes.Pizza[indexPizza].price.toFixed(2)}€</h3>
                    ${getDishButton(indexPizza, 'Pizza')}
                </div>
            </div>`;
}

function getSaladDishes(indexSalad) {
    return ` <div class="dishes">
                <img src="${myDishes.Salad[indexSalad].Image}" alt="Salad${indexSalad}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes.Salad[indexSalad].name}</h3>
                    <span>${myDishes.Salad[indexSalad].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes.Salad[indexSalad].price.toFixed(2)}€</h3>
                    ${getDishButton(indexSalad, 'Salad')}
                </div>
            </div>`;
}

function getBasketDishes(indexBasket){
    return `<div class="basketDishes">
                <h3>${myBasketDishes[indexBasket].name}</h3>
                    <div class="basketCounter">
                        <img src="./assets/icons/delete_2.svg" alt="delete.svg" onclick="removeFromBasket(${indexBasket})">
                        <h3>${myBasketDishes[indexBasket].amount}</h3>
                        <button class="btnAmount" onclick="increaseAmount(${indexBasket})">+</button>
                    </div>
                <h3 class="basketPrice">${(myBasketDishes[indexBasket].price * myBasketDishes[indexBasket].amount).toFixed(2)}€</h3>
            </div> `

}

function getBasketDishesAmount(indexBasket){
    return `<div class="basketDishes">
                <h3>${myBasketDishes[indexBasket].name}</h3>
                    <div class="basketCounter">
                        <button class="btnAmount" onclick="decreaseAmount(${indexBasket})">-</button>
                        <h3>${myBasketDishes[indexBasket].amount}</h3>
                        <button class="btnAmount" onclick="increaseAmount(${indexBasket})">+</button>
                    </div>
                <img class="basketImg" src="./assets/icons/delete_2.svg" alt="delete.svg" onclick="removeFromBasket(${indexBasket})">
                <h3 class="basketPrice">${(myBasketDishes[indexBasket].price * myBasketDishes[indexBasket].amount).toFixed(2)}€</h3>
            </div> `

}

function getDishButton(index, category) {
    let basketIndex = myBasketDishes.findIndex(item => item.name === myDishes[category][index].name);

    if (basketIndex !== -1) {
        return `
            <div class="amountControl">
                <button class="btnAmount"  onclick="decreaseAmount(${basketIndex})">-</button>
                <h3>${myBasketDishes[basketIndex].amount}</h3>
                <button class="btnAmount" onclick="increaseAmount(${basketIndex})">+</button>
            </div>
        `;
    } else {
        return `
            <button class="btnDishes" onclick="pushToBasket(${index}, '${category}')">
                Add to basket
            </button>
        `;
    }
}