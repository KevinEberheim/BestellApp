const dialogRef = document.getElementById("dialogOrderConfirmed");
const sidebarRef = document.getElementById("sidebarId");
let dialogTimeout = null;

function openDialog() {
    if (dialogTimeout){
        clearTimeout(dialogTimeout);
    }

    dialogRef.showModal();
    sidebarRef.classList.add("invisible")

    dialogTimeout = setTimeout(() => {
            closeDialog();
        }, 5000);
}

function closeDialog() {
    if (dialogTimeout){
        clearTimeout(dialogTimeout);
        dialogTimeout = null;
    }

    dialogRef.close();
    for (let index = myBasketDishes.length-1; index > 0 ; index--) {
        removeFromBasket(index) 
        console.log(myBasketDishes.length);
              
    }
    sidebarRef.classList.remove("invisible")
}