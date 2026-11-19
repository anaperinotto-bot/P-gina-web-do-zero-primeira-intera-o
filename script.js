
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("Fui clicado");

        let texto = botao.querySelector("span");

        if (texto === null) {
            return;
        }

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});


