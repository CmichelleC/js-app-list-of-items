let pokemonRepository = (function () {
  let pokemonList = [  
  {name: 'Bulbasaur', height: 7, types: [' grass', 'poison']},
  {name: 'Zubat', height: 8, types: [' poison', 'flying']},
  {name: 'Beedrill', height: 10, types: [' bug', 'poison']},
];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }
  
  return {
    add: add,
    getAll: getAll
  };
}) ();

function listPokemon(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' units tall and has the following types: ' + pokemon.types[0] + ', ' + pokemon.types[1] + '.' + '<br>');
};

pokemonRepository.getAll().forEach(listPokemon);


