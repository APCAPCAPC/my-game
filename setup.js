var names = ["Vant Ascendancy","Athor, Lord of Despair","Gryfon & Kryuger PMC Administration","Orthos Imperium","Nox Sanguis","Asseimono Organism","The Cube","Paradise of the Turtle Boyz","Shroom Imperium"]
var gold = [1,1,1,1,1,1,1,1,1,1]
//generar imperio aleatorio
var your_empire = getRandomInt(1,10)
user_empire = document.getElementById("empire_" + your_empire)

//Marcar el imperio
user_empire.innerHTML = "<center>My empire</cebter>"
user_empire.style.backgroundColor = "red"

//Crear enemigos
var enemies = [1,2,3,4,5,6,7,8,9,10]
enemies.splice(your_empire - 1,1)

//Generar nombres de enemigos y el imperio neutral
var x = 0;
while(x < 9){
    var enemy = enemies[x]
    console.log(x)
    document.getElementById("empire_" + enemy).innerHTML = "<center>" + names[x]
    x++;
}
document.getElementById("neutral").innerHTML = "<center>neutral empire</center>"
document.getElementById("neutral").style.backgroundColor = "yellow"
