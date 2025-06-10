
let converter = document.querySelector("#convert");



converter.addEventListener("click", function () {
let n = document.querySelector("#number").value;
let unit = document.querySelector("#units").value;
let resultado = document.querySelector("#result");
    if (unit == "Km") {
       let result = (n/1.6093445);
        resultado.innerHTML = result + " Millas";
      

    }
    else {
       let result = (n*1.6093445);
        resultado.innerHTML = result + " Kilómetros";
     
    }

})




