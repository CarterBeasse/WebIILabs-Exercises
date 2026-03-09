import { readFromJsonFile, writeToJsonFile } from "./utilities.js";
import { faker } from "@faker-js/faker"

let randomName = faker.person.firstName();
console.log(randomName);
let pokemon = readFromJsonFile("pokemon.json");

pokemon[0].nickname = faker.person.firstName();
pokemon[1].nickname = faker.person.firstName();
pokemon[2].nickname = faker.person.firstName();

console.log(pokemon);
writeToJsonFile("pokemon.json", pokemon);