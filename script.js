// Atribuindo função ao botão

const buttonSearch = document.querySelector('button')

buttonSearch.addEventListener('click', function(e) {

  e.preventDefault()

  const inputSearch = document.querySelector('#search')
  const dataSearch = inputSearch.value
  console.log(dataSearch)
})


// Consumindo API principal

let mainURL = 'https://pokeapi.co/api/v2/pokemon/'

async function getContent(url){
  const response = await fetch(url)
  const data = await response.json()

  const arrayResult = data.results;
  const arrayURLs = []
  
  arrayResult.forEach(element => {
    
    arrayURLs.push(element.url)

  });

  return arrayURLs;
}


// Capturando dados dos pokemons individualmente

splitContent(getContent(mainURL))

async function splitContent(pokemonsURLs){
  const pokemons = await pokemonsURLs //urls brutas

  let arrayPokemonsReady

  pokemons.forEach(async (url) => {

    const response = await fetch(url)
    const data = await response.json()

    let arrayPokemonsRaw = []
    arrayPokemonsRaw.push(data)
  
    arrayPokemonsReady = arrayPokemonsRaw[0] // arrays preparados para uso
    console.log(arrayPokemonsReady)
  })
  
  return arrayPokemonsReady
}