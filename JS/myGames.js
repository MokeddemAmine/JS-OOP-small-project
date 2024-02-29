
function Character (name, strength, health){
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.elements = new UIElements(this.name)

}
function UIElements (name){
    this.attackBtn = document.getElementById(`${name}-attack`);
    this.healthBtn = document.getElementById(`${name}-make-health`);
    this.progress = document.querySelector(`.${name}-health span`);
    this.alive = document.getElementById(`${name}-alive`);
}
Character.prototype.attack = function(enemie){
    if(enemie.health > this.strength)
        enemie.health -= this.strength;
    else{
        enemie.health = 0;
        enemie.elements.attackBtn.remove();
        enemie.elements.healthBtn.remove();
        enemie.elements.alive.innerHTML = `${enemie.name.toUpperCase()} lose the Game `;
    }
    enemie.elements.progress.style.width = `${enemie.health}%`;
}
Character.prototype.makeHealth = function(){
    if(this.health <=90){
        this.health +=10;
    }
    else
        this.health = 100;
    this.elements.progress.style.width = `${this.health}%`;
}
Character.prototype.status = function(){
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`);
}

let narotoo = new Character('narotoo',8,100);
let sasakii = new Character('sasakii',6,100);

narotoo.elements.attackBtn.addEventListener('click',function(){
    narotoo.attack(sasakii);
})
sasakii.elements.attackBtn.addEventListener('click',function(){
    sasakii.attack(narotoo);
})
narotoo.elements.healthBtn.addEventListener('click',function(){
    narotoo.makeHealth();
})
sasakii.elements.healthBtn.addEventListener('click',function(){
    sasakii.makeHealth();
})


