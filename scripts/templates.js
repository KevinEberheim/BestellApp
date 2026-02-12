function getDishesTemplate(index, category) {
    return ` <div class="dishes">
                <img src="${myDishes[category][index].Image}" alt="Burger${index}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes[category][index].name}</h3>
                    <span>${myDishes[category][index].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes[category][index].price.toFixed(2)}€</h3>
                    ${getDishButton(index, category)}
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