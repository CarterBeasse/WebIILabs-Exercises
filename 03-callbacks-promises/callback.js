import { pokemonDatabase } from "./pokemonDatabase.js";


function fetchPokemon() {
    const fetchTime = Math.floor(Math.random() * 500) + 1;

    setTimeout(() => {
        console.log(pokemonDatabase);

        console.timeEnd("Callbacks Timer");
    }, fetchTime);
};

/**
 * 
 * @param {*} pokemon 
 * @param {*} callback 
 */
function createPokemon(pokemon, callback) {
    const createTime = Math.floor(Math.random() * 500) + 1;

    setTimeout(() => {
        pokemonDatabase.push(pokemon);

        if (callback) {
            callback();
        }

    }, createTime);
}

console.time("Callbacks Timer");


createPokemon({ name: "Pikachu", type: "Electric" }, () => {
    createPokemon({ name: "Eevee", type: "Normal" }, fetchPokemon);
});

