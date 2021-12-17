///função de inserção de number e operador no campo resultado
function insert(num) {
 let number = document.getElementById("resultado").innerHTML;
 document.getElementById("resultado").innerHTML = number + num
}
///função para limpar o campo resultado
function clean() {
    document.getElementById("resultado").innerHTML = ""
}
///função para apagar um number/operador de cada vez
function back() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1); 
}
///função para calcular 
function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
       document.getElementById("resultado").innerHTML = eval(resultado) 
    }
}