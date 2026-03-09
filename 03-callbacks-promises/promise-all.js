import { pokemonDatabase } from "./pokemonDatabase.js";

function fetchPokemon() {
  const fetchTime = Math.floor(Math.random() * 500) + 1;

  setTimeout(() => {
    console.log(pokemonDatabase);

    console.timeEnd("Promise.all Timer");
  }, fetchTime);
}

/**
 * 
 * @param {*} pokemon 
 * @returns 
 */
function createPokemon(pokemon) {

  const createTime = Math.floor(Math.random() * 500) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        pokemonDatabase.push(pokemon);

        resolve(null);
      } catch (err) {
        reject(err);
      }
    }, createTime);
  });
}

console.time("Promise.all Timer");

const pokemonPromises = [
  createPokemon({ name: "Pikachu", type: "Electric" }),
  createPokemon({ name: "Eevee", type: "Normal" }),
  createPokemon({ name: "Snorlax", type: "Normal" }),
  createPokemon({ name: "Gengar", type: "Ghost" }),
];

Promise.all(pokemonPromises)
  .then(() => fetchPokemon())
  .catch((err) => console.error("Something failed:", err));