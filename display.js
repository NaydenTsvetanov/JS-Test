let element = document.getElementById("myDiv");

for(var i = 0; i < 25; i++){
    for(var j = 0; j < 100; j++){
        if(i == 0 || j == 0 || i == 24 || j == 99){
            element.innerHTML += "#";
        }else {
            element.innerHTML += " . ";
        }
    }
    element.innerHTML += "<br>";
}