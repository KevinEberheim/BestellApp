const dialogRef = document.getElementById("dialogOrderConfirmed");
const sidebarRef = document.getElementById("sidebarId");

function openDialog() {

    dialogRef.showModal();
    sidebarRef.classList.add("invisible")

}

function closeDialog() {

    dialogRef.close();
    while (myBasketDishes.length > 0) {
        removeFromBasket(myBasketDishes.length - 1); 
        console.log(myBasketDishes.length);
              
    }
    sidebarRef.classList.remove("invisible")
}