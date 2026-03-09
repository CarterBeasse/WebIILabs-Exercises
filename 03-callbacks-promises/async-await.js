import { pokemonDatabase } from "./pokemonDatabase.js";

function fetchPokemon() {
  const fetchTime = Math.floor(Math.random() * 500) + 1;

  setTimeout(() => {
    console.log(pokemonDatabase);

    console.timeEnd("Async/Await Timer");
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

async function createAllPokemon() {
  await createPokemon({ name: "Pikachu", type: "Electric" });
  await createPokemon({ name: "Eevee", type: "Normal" });
  await createPokemon({ name: "Snorlax", type: "Normal" });
  await createPokemon({ name: "Gengar", type: "Ghost" });

  fetchPokemon();
}

console.time("Async/Await Timer");

createAllPokemon();