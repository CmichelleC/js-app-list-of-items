let pokemonList = [
  {name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
  {name: 'Zubat', height: 8, types: ['poison', 'flying']},
  {name: 'Beedrill', height: 10, types: ['bug', 'poison']},
];
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <=7){
    document.write(pokemonList[i].name + " - Height: 7" + "<br>") 
  }else if (pokemonList[i].height >7 && pokemonList[i].height<9){
    document.write(pokemonList[i].name + " - Height: 8" + "<br>")
  }else {
    document.write(pokemonList[i].name + " - Height: 10" + " (Wow, that's big!)" + "<br>")
  }
}