const pokemonImage = document.querySelector('.pokemon_image');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

let initialPokemon = 0;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();

        return data;
    }

}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        initialPokemon = data.id;
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
    }else {
        pokemonImage.src = '';
        pokemonName.innerHTML = 'Não Encontrado';
        pokemonNumber.innerHTML = '';
    }

}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

prev.addEventListener('click', (event) => {
    if(initialPokemon > 1){
        initialPokemon -= 1;
        renderPokemon(initialPokemon);
    }
});

next.addEventListener('click', (event) => {
    initialPokemon += 1;
    renderPokemon(initialPokemon);
});
