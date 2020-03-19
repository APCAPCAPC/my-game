function update(){
    x = 1
    while(x < 11){
        document.getElementById("empire_" + (x)).innerHTML += "<center>gold:" + gold[x-1] + "</center>"
        x++;
    }    
}
update()