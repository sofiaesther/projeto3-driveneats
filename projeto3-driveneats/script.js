
let food = 0;
let drink = 0; 
let desert = 0;
     function selectedFood(elemento) {
        const Clicado = document.querySelector(".selected.food");
        if (Clicado !== null) {
          Clicado.classList.remove("selected");
        }


        elemento.classList.add("selected");

        food=1;
        if (food&drink&desert==1) {
            const botao = document.querySelector(".button");
            botao.classList.add("buttonSelected");
            botao.classList.remove("button");
     }
      }

      function selectedDrink(elemento) {
        const Clicado = document.querySelector(".selected.drink");
        if (Clicado !== null) {
          Clicado.classList.remove("selected");
        }
        

        elemento.classList.add("selected");
        drink=1;
        if (food&drink&desert==1) {
            const botao = document.querySelector(".button");
            botao.classList.add("buttonSelected");
            botao.classList.remove("button");
     }
      }
      function selectedDesert(elemento) {
        const Clicado = document.querySelector(".selected.desert");
        if (Clicado !== null) {
          Clicado.classList.remove("selected");
        }
        

        elemento.classList.add("selected");
        desert=1;
        if (food&drink&desert==1) {
            const botao = document.querySelector(".button");
            botao.classList.add("buttonSelected");
            botao.classList.remove("button");
     }
      }
      
