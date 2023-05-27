function toggleMenu() {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".toggle-button");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&#10006;"; // Define o ícone de "X"
    } else {
        toggleButton.innerHTML = "&#9776;"; // Define o ícone de "☰"
    }
}
function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    if (nome !== "") {
        document.getElementById("nome").style.display = "none";
        document.getElementById("botao").style.display = "none";
        document.getElementById("mensagem").innerHTML = "Seja bem-vindo(a), " + nome + "!";
    }
}