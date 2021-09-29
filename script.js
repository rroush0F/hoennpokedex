const entries = document.getElementById('entries')

console.log(entries)

const fetchHoenn = () => {
    const promises = [];
    for (let i = 252; i <= 386; i++){
        //console.log("Hoenn Pokemon")
        const url =`https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    };

    Promise.all(promises).then((results) => {
        const hoennPokemon = results.map((data) => ({
            pokename: data.name,
            pokenum: data.id,
            sprite: data.sprites['front_default'],
        }));
        showPokemon(hoennPokemon);
    });    
};

const showPokemon = (hoennPokemon) => {
    console.log(hoennPokemon);
    const pokemonList = hoennPokemon.map( pokemon => `
    <li class="informationArea">
        <img class="pokeSprite" src="${pokemon.sprite}"/>
        <h2 class="pokeNumName">${pokemon.pokenum}. ${pokemon.pokename}</h2>
    </li>
    `
    ).join('');
    entries.innerHTML = pokemonList;
}

fetchHoenn();