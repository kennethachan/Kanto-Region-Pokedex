const pokemonCard = document.getElementById("pokemon-card")
const randomBtn = document.getElementById("random")

const pokeImage = document.getElementById("poke-image")
const pokemonName = document.getElementsByClassName("poke-name")
const hp = document.getElementById("hp")
const id = document.getElementById("id")
const attackNumber = document.getElementById("attack-number")
const defenseNumber = document.getElementById("defense-number")
const speedNumber = document.getElementById("speed-number")
const typeOne = document.getElementById("type-one")
const typeTwo = document.getElementById("type-two")

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
//Generate card
const createCard = (data) => {
  console.log(data)
  const renderName = data.name
  const id = data.id
  const renderImage = data.sprites.other.dream_world.front_default
  //   const hp = data.stats[0].base_stat
  //   const attackNumber = data.stats[1].base_stat
  //   const defenseNumber = data.stats[2].base_stat
  //   const speedNumber = data.stats[5].base_stat
  //   const typeOne = data.types[0]
  //   const typeTwo = data.types[1]

  pokemonCard.innerHTML = `<img id="poke-image" src="${renderImage}"/>
  <div class="poke-name">${renderName}</div>`
}

// const movieItem = document.createElement("li")
// movieItem.innerHTML = renderList
// movieList.append(movieItem)

//click to generate random pokemon card
randomBtn.addEventListener("click", pokeStats)
