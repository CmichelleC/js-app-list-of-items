let pokemonRepository = (function () {
  let pokemonList = [];

  function add(Pikachu) {
    pokemonList.push(Pikachu);
  }
  
  function getAll() {
    return pokemonList;
  }
  
  return {
    add: add,
    getAll: getAll
  };
})();

let pokemonList = [
  {name: 'Bulbasaur', height: 7, types: [' grass', ' poison. ']},
  {name: 'Zubat', height: 8, types: [' poison', ' flying. ']},
  {name: 'Beedrill', height: 10, types: [' bug', ' poison. ']},
];

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' units tall and has the following types: ' + pokemon.types + '<br>');
});

console.log(pokemonRepository.getAll()); 
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); 


