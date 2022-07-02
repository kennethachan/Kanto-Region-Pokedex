const pokemonCard = document.getElementById("pokemon-card")
const randomBtn = document.getElementById("random")

// const pokeImage = document.getElementById("poke-image")
// const pokemonName = document.getElementsByClassName("poke-name")
// const hp = document.getElementById("hp")
// const id = document.getElementById("id")
// const attackNumber = document.getElementById("attack-number")
// const defenseNumber = document.getElementById("defense-number")
// const speedNumber = document.getElementById("speed-number")
// const typeOne = document.getElementById("type-one")
// const typeTwo = document.getElementById("type-two")

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
  const renderId = data.id
  const renderImage = data.sprites.other.dream_world.front_default
  const renderHP = data.stats[0].base_stat
  const renderAttack = data.stats[1].base_stat
  const renderDefense = data.stats[2].base_stat
  const renderSpeed = data.stats[5].base_stat
  const typeOne = data.types[0].type.name

  pokemonCard.innerHTML = `<div id="pokemon-card">
  <img id="poke-image" src="${renderImage}"/>
  <div class="poke-name">${renderName}</div>
   <div id="id"><span>#</span>${renderId}</div> 
  <div id="hp">${renderHP}</div>
  <div id="hp-num">HP</div>  
  <div id="type-one"><span>type: </span>${typeOne}</div>
  <div class="stats">
      <div> 
          <h4 id="attack-number">${renderAttack}</h4>
          <p id="attack"> attack</p>
      </div>
      <div> 
          <h4 id="defense-number">${renderDefense}</h4>
          <p id="defense"> defense</p>
      </div>
      <div> 
          <h4 id="speed-number">${renderSpeed}</h4>
          <p id="speed"> speed</p>
      </div>
  </div>
</div>
</div>
  `
}

// const movieItem = document.createElement("li")
// movieItem.innerHTML = renderList
// movieList.append(movieItem)

//click to generate random pokemon card
randomBtn.addEventListener("click", pokeStats)
