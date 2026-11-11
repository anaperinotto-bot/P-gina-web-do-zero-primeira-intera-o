const botoes = document.querySelectorALL("button");

botoes.forEach(function (botao) {
 botao.addEventListener("click", botaoClicado);
 function botaoClicado() {
     console.log("fui clicado");
     let texto = botao.querySelector("span");
     if (curtiu === false){
         texto.textContent++;
         curtiu = true;
     } else{
         
     }
 }
}
)

