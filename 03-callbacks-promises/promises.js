import { pokemonDatabase } from "./pokemonDatabase.js";


function fetchPokemon() {
    const fetchTime = Math.floor(Math.random() * 500) + 1;

    setTimeout(() => {
        console.log(pokemonDatabase);

        console.timeEnd("Promises Timer");
    }, fetchTime);
};

/**
 * 
 * @param {*} pokemon
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

console.time("Promises Timer");

createPokemon({ name: "Pikachu", type: "Electric" })
  .then(() => createPokemon({ name: "Eevee", type: "Normal" }))
  .then(() => createPokemon({ name: "Snorlax", type: "Normal" }))
  .then(() => fetchPokemon())
  .catch((err) => console.error("Something failed:", err));
