class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type; // Warrior, Mage, Monk, Ninja
    }

    attack() {
        let attackSpecial;

        if (this.type === "Warrior") {
            attackSpecial = "sword";
        } else if (this.type === "Mage") {
            attackSpecial = "magic";
        } else if (this.type === "Monk") {
            attackSpecial = "martial art";
        } else if (this.type === "Ninja") {
            attackSpecial = "shuriken";
        } else {
            attackSpecial = "unknown attack";
        }

        console.log(`The ${this.type} ${this.name} attacks using ${attackSpecial}`);
    }
}

// Exemplo de uso
let mage = new Hero("Zik", 18, "Mage");
mage.attack();

let ninja = new Hero("Ryu", 25, "Ninja");
ninja.attack();

let warrior = new Hero("Falcie", 22, "Warrior");
warrior.attack();
