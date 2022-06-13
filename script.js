
let food = 0;
let drink = 0; 
let desert = 0;
let foodsel;
let drinksel;
let desertsel;
let valorfood;
let valordrink;
let valordesert;
let telefone = 5571992972800;

function selectedFood(elemento) {
        const Clicado = document.querySelector(".selected.food");
        if (Clicado !== null) {
          Clicado.classList.remove("selected");
          Clicado.classList.remove("foodsel");
        }

        elemento.classList.add("selected");
        elemento.classList.add("foodsel");


        valorfood = Number(document.querySelector(".foodsel>h3").innerText.substring(3));

        foodsel= document.querySelector(".foodsel>h2").innerText;
        console.log(foodsel);

        food=1;
        ActivateOrder();
      }

function selectedDrink(elemento) {
    const Clicado = document.querySelector(".selected.drink");
    if (Clicado !== null) {
          Clicado.classList.remove("selected");
          Clicado.classList.remove("drinksel");
        }
    

    elemento.classList.add("selected");
    elemento.classList.add("drinksel");

    valordrink = Number(document.querySelector(".drink.selected>h3").innerText.substring(3));
    drinksel= document.querySelector(".drink.selected>h2").innerText;
    console.log(drinksel);

        drink=1;
        ActivateOrder();
      }
      function selectedDesert(elemento) {
        const Clicado = document.querySelector(".selected.desert");
        if (Clicado !== null) {
          Clicado.classList.remove("selected");
          Clicado.classList.remove("desertsel");
        }

        elemento.classList.add("selected");
        elemento.classList.add("desertsel");
        
        valordesert = Number(document.querySelector(".desert.selected>h3").innerText.substring(3));
        desertsel= document.querySelector(".desert.selected>h2").innerText;
        console.log(desertsel)
    
        desert=1;
        ActivateOrder();
      }
      function endOrder(botao){
        let valor = valordesert+valordrink+valorfood
        let uri = `Olá, gostaria de fazer o pedido:\n- Prato: ${foodsel} \n- Bebida: ${drinksel}\n- Sobremesa: ${desertsel}\nTotal: R$ ${valor.toFixed(2)}`
        let pathtowpp = `https://wa.me/${telefone}?text=`+encodeURIComponent(uri);
        window.open(pathtowpp);
        
    }
    
function ActivateOrder(){
    if (food&drink&desert==1) {
        const botao = document.querySelector(".button");
        if(botao !==null){
        botao.classList.add("buttonSelected");
        botao.classList.remove("button");
    }
 }
}