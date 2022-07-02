const pokemonCard = document.getElementById("pokemon-card")
const randomBtn = document.getElementById("random")

const pokeApi = `https://pokeapi.co/api/v2/pokemon/`

//create a random number b/w 1 - 150
const pokeStats = () => {
  let randomNum = Math.floor(Math.random() * 150) + 1
  console.log(randomNum)

  //combining random number with pokemon API
  const combinedLink = pokeApi + randomNum
  console.log(combinedLink)

  //Retrieve pokemon API based on number generated
  fetch(combinedLink)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      createCard(data)
    })
}

const createCard = (data) => {
  const pokeName = data.name
  const idNum = data.id
  const image = data.sprites.other.dream_world.front_default
  const hp = data.stats[0].base_stat
  const attack = data.stats[1].base_stat
  const defense = data.stats[2].base_stat
  const speed = data.stats[5].base_stat
  const type1 = data.type[0].type.name
  const type2 = data.type[1].type.name
  console.log(data)
}
//click to generate random pokemon card
randomBtn.addEventListener("click", pokeStats)
