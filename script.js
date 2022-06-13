
let food = 0;
let drink = 0; 
let desert = 0;
let foodsel;
let drinksel;
let desertsel;
let valorfood;
let valordrink;
let valordesert;
let telefone = 71992972800;

function selectedFood(elemento) {
        const Clicado = document.querySelector(".selected.food");
        if (Clicado !== null) {
          Clicado.classList.remove("selected");
          Clicado.classList.remove("foodsel");
        }

        elemento.classList.add("selected");
        elemento.classList.add("foodsel");


        valorfood = document.querySelector(".foodsel>h3")

        foodsel= document.querySelector(".foodsel>h2")

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

    valordrink = document.querySelector(".drink.selected>h3")
    drinksel= document.querySelector(".drink.selected>h2")

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
        
        valordesert = document.querySelector(".desert.selected>h3").innerText;
        desertsel= document.querySelector(".desert.selected>h2").innerText;
        console.log(valordesert.substring(3))
    
        desert=1;
        ActivateOrder();
      }
      function endOrder(botao){
          let valor = document.querySelector("h3.selected")
          console.log(valor.innerText)
        
        window.open(`https://wa.me/${telefone}?text=Olá, gostaria de fazer o pedido:\n- Prato: ${foodsel} \n- Bebida: ${drinksel}\n- Sobremesa: ${desertsel}\n`)
        
    }
    
function ActivateOrder(){
    if (food&drink&desert==1) {
        const botao = document.querySelector(".button");
        botao.classList.add("buttonSelected");
        botao.classList.remove("button");
 }
}