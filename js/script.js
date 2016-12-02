" use strict ";

var display = document.getElementById("display");

class Pet {
    constructor(name) {
        this.name=name;
        var speak = function () {
            display.innerHTML += "Generic Animal Sound";
        };
    };
};

class Dog extends Pet {
    constructor(name){
        super(name);
    };
    speak = function (){
        display.innerHTML += "Woof<br>";
    };
};
//class Cat extends Pet {
//    constructor(name){
//        super(name);
//    }
//    
//    var speak = function (){
//        display.innerHTML += "Meow<br>";
//    }
//}
//class Horse extends Pet {
//    constructor(name){
//        super(name);
//    }
//    
//    var speak = function (){
//        display.innerHTML += "Neigh<br>";
//    }
//}

function PetChat(){
    var numPets = null;
    var pets = [];

    var askHowMany = function(){
        return prompt("How many pets do you have?");
    };

    var askPetInfo = function(){
        for(var i=0; i<numPets; i++){
            var type = prompt("What is pet #" + (i+1) + "? (cat, dog, horse)");
            var name = prompt("What is pet #" + (i+1) + "'s name'?");
            var textOut = type + " " + name + "<br />";
            display.innerHTML += textOut;
            switch(type.toUpperCase()){
//                case "DOG":pets.push(new Dog(name));break;
//                case "Cat":pets.push(new Dog(name));break;
//                case "Horse":pets.push(new Dog(name));break;
                default:pets.push(new Pet(name));break;
            }
            
        }
    };

    var printPetInfo = function (){
        for (var i = 0;i < numPets;i++){
            display.innerHTML += pets[i].className() + " " + pets[i].name + " ";
            pets[i].speak();
            display.innerHTML += "<br>";
        }
    }

    this.init = function(){
        while(numPets === null){
            numPets = askHowMany();
        }

    askPetInfo();
    printPetInfo();
    }
};

var chat = new PetChat();
chat.init();
