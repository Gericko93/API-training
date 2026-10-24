export let pokemonArray =[]

export function loadPokemon(callback)
{
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("load",()=>{
    const data = JSON.parse(xhr.response)
    const dataResults = data.results

    pokemonArray = dataResults.map((object,index)=>{
      return {
        name : object.name,
        imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${index+1}.gif`
      }
    })
    callback(pokemonArray)
  })
  xhr.open("GET","https://pokeapi.co/api/v2/pokemon/?limit=151" );
  xhr.send();
}
