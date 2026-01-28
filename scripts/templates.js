function getBurgerDishes(index) {
    return ` <div class="dishes">
                <img src="${myDishes.Burger[index].Image}" alt="Burger${index}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes.Burger[index].name}</h3>
                    <span>${myDishes.Burger[index].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes.Burger[index].price.toFixed(2)}€</h3>
                    <button>Add to basket</button>
                </div>
            </div>`;
}

function getPizzaDishes(index) {
    return ` <div class="dishes">
                <img src="${myDishes.Pizza[index].Image}" alt="Pizza${index}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes.Pizza[index].name}</h3>
                    <span>${myDishes.Pizza[index].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes.Pizza[index].price.toFixed(2)}€</h3>
                    <button>Add to basket</button>
                </div>
            </div>`;
}

function getSaladDishes(index) {
    return ` <div class="dishes">
                <img src="${myDishes.Salad[index].Image}" alt="Salad${index}.png">
                <div class="descriptionDishes">
                    <h3>${myDishes.Salad[index].name}</h3>
                    <span>${myDishes.Salad[index].description}</span>
                </div>
                <div class="priceDishes">
                    <h3>${myDishes.Salad[index].price.toFixed(2)}€</h3>
                    <button>Add to basket</button>
                </div>
            </div>`;
}