let pilotName = prompt("Qual o nome do piloto?");

let velocity = 0

let newVelocity = prompt("Qual a velocidade você gostaria de acelerar?");

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + " km/h.");

if (confirmVelocity) {velocity = newVelocity;}

if (velocity <= 0) {alert("Nave está parada. Considere partir e aumentar a velocidade " + pilotName + "!");}
else if (velocity < 40) {alert("Você está devagar. Podemos aumentar mais. " + pilotName + "!");}

else if(velocity < 80) {alert("Parece uma boa velocidade para manter " + pilotName + "!");}

else if (velocity < 100) {alert("Você está muito rápido. Considere diminuir a velocidade " + pilotName + "!");}

else {alert("Velocidade perigosa. Controle automatico forçado " + pilotName + "!");}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + " km/h");
