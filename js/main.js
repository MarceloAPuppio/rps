let optionsArray = ["piedra", "papel", "tijera"];
const choice = document.getElementById("choice");
const choiceCpu = document.getElementById("choiceCpu");
const img_player_piedra = document.getElementById("img_player_Piedra");
const img_player_papel = document.getElementById("img_player_Papel");
const img_player_tijeras = document.getElementById("img_player_Tijeras");
const boton = document.getElementById("boton");
const imgCpu = document.getElementById("img_Cpu");
const textoResultado = document.getElementById("textoResultado");

// textoResultado.innerHTML = "caca";
img_player_papel.addEventListener("click", () => {
  choice.innerHTML = "Papel";
});
img_player_piedra.addEventListener("click", () => {
  choice.innerHTML = "Piedra";
});
img_player_tijeras.addEventListener("click", () => {
  choice.innerHTML = "Tijera";
});

boton.addEventListener("click", () => {
  if (choice.innerHTML == "") {
    alert("debes elegir una opción");
    return;
  }
  let number;
  number = Math.floor(Math.random() * 3) + 1;
  imgCpu.setAttribute("src", `images/${optionsArray[number - 1]}.png`);
  choiceCpu.innerHTML = optionsArray[number - 1];
  switch (choice.innerHTML.toLowerCase()) {
    case "piedra":
      if (number == 1) {
        textoResultado.innerHTML = "Empataste";
      } else if (number == 2) {
        textoResultado.innerHTML = "Perdiste";
      } else {
        textoResultado.innerHTML = "Ganaste";
      }
      break;
    case "papel":
      if (number == 1) textoResultado.innerHTML = "Ganaste";
      else if (number == 2) textoResultado.innerHTML = "Empataste";
      else textoResultado.innerHTML = "Perdiste";
      break;
    case "tijera":
      if (number == 1) textoResultado.innerHTML = "Perdiste";
      else if (number == 2) textoResultado.innerHTML = "Ganaste";
      else textoResultado.innerHTML = "Empataste";
      break;
  }
});
