main();

function main() {
    // problemOne();
    // problemTwo();
    // problemThree();
    // problemFour();
    // problemFive();
    // problemSix();
    problemSeven();
}

function problemOne() {
    let loaf = {
        flour: 300,
        water: 210,
        hydration: function() {
            return this.water/this.flour * 100;
        }
    }

    console.log(`loaf.flour = ${loaf.flour}, loaf.water = ${loaf.water}`);
    console.log(`loaf.hydration = ${loaf.hydration()}`);
}

function problemTwo() {

    let testObject = createObject(1, 2, 3, 4, 5);

    for(key in testObject) {
        console.log(`${key}: ${testObject[key]}`);
    }

    function createObject(foo, bar, fum, quux, spam) {
        return {
            foo,
            bar,
            fum,
            quux,
            spam,
        };
    }
}

function problemThree() {
    let meals = ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']

    let obj = {
        meals: meals
    }

    console.log(obj["meals"][3]);

}

function problemFour() {
    
    let objArray = [];
    objArray.push(objCreator('jo', 'IT'));
    objArray.push(objCreator('john', 'software'));
    objArray.push(objCreator('josh', 'trash'));

    objArray.forEach(obj => {
        console.log(`${obj.name}'s jobTitle is ${obj.jobTitle}`);
    });

    function objCreator(name, jobTitle) {
        return {
            name,
            jobTitle
        }
    }
}

function problemFive() {
    let objArray = [];
    objArray.push(objCreator('jo', 'IT', 'geralt'));
    objArray.push(objCreator('john', 'software', 'john carmack'));
    objArray.push(objCreator('josh', 'trash'));

    objArray.forEach(obj => {
        if(obj.boss !== undefined) {
            console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`);
        } else {
            console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
        }
    });

    function objCreator(name, jobTitle, boss) {
        return {
            name,
            jobTitle,
            boss
        }
    }
}

function problemSix() {
    
    let decodedMessage = '';

    let encryptedMessage = 'craft block argon meter bells brown croon droop';
    encryptedMessage.split(' ').forEach(word => {
        decodedMessage += decode(word);
    });

    console.log(decodedMessage);

    function decode(word) {
        let cipherObj = {
            a: 2,
            b: 3,
            c: 4,
            d: 5
        }

        if(cipherObj[word[0]] === undefined) {
            return ' ';
        } else {
            return word[cipherObj[word[0]] - 1];
        }
    }
}

function problemSeven() {

    let characters = [];
    characters.push(createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'));
    characters.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'));
    characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'));
    characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'));
    characters.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'));
    characters.push(createCharacter('Pikachu', 'chu', 'electric mouse', 'Kanto', 100, 50, 'paw'));

    let findAragorn = characters.find(character => {
        return character.nickname === 'aragorn';
    }).describe();
    let hobbitArray = characters.filter(character => {
        character.race === 'Hobbit';
    });
    let atkAboveFiveArray = characters.filter(character => {
        character.attack > 5;
    });

    function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
        return {
            name,
            nickname,
            race,
            origin,
            attack,
            defense,
            weapon,
            describe: function() {
                console.log(`${this.name} is a ${this.race} from ${this.origin} who uses the ${this.weapon}.`);
            },
            evaluateFight: function(character) {
                let x = character.defense > this.attack ? 0 : this.attack - character.defense;
                let y = this.defense > character.attack ? 0 : character.attack - this.defense;
                return `Your opponent takes ${x} damage and you receive ${y} damage`;
            }
        };
    }
}