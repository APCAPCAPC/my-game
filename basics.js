//gc() game console
//getRandomInt(min, max) escojer numeros aleatorios
//scenario(change_to) cambiar escenario
function gc(message){
    document.getElementById("console").innerHTML += message;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}     
function scenario(change_to){
    if (change_to == 1) {
        document.getElementById("scenario_2").style.zIndex = "1"
        document.getElementById("scenario_1").style.zIndex = "2"
    }
    if (change_to == 2) {
        document.getElementById("scenario_2").style.zIndex = "2"
        document.getElementById("scenario_1").style.zIndex = "1"
    }
}