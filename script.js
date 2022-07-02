//Global Variables
const pokemonCard = document.getElementById("pokemon-card")
const randomBtn = document.getElementById("random")
const findBtn = document.getElementById("find")
const search = document.getElementById("search")

const pokeApi = `https://pokeapi.co/api/v2/pokemon/`

//create a random number b/w 1 - 150
const randomPokeStats = () => {
  let randomNum = Math.floor(Math.random() * 150) + 1
  console.log(randomNum)

  //combining random number with pokemon API
  const combinedLink = pokeApi + randomNum
  console.log(combinedLink)

  axios.get(combinedLink).then((response) => {
    createRandomCard(response)
  })
}

//Generate random card
const createRandomCard = (response) => {
  console.log(response)
  const renderName = response.data.name
  const renderId = response.data.id
  const renderImage = response.data.sprites.other.dream_world.front_default
  const renderHP = response.data.stats[0].base_stat
  const renderAttack = response.data.stats[1].base_stat
  const renderDefense = response.data.stats[2].base_stat
  const renderSpeed = response.data.stats[5].base_stat
  const typeOne = response.data.types[0].type.name

  //Found a wierd way to append data, inspired from TMDB lab/hw
  pokemonCard.innerHTML = `<div id="pokemon-card">
  <div> <img id="poke-image" src="${renderImage}"/></div>
  <div class="poke-name">${renderName}</div>
   <div id="id"><span>#</span>${renderId}</div> 
   <div id="hp-num">${renderHP}</div> 
   <div id="hp">HP</div>
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
  <div id="type"> 
  <h4 id="type-attribute">${typeOne}</h4>
  <p id="type-text">type</p>
</div>
</div>
</div>
  `
}

//Retrieve pokemon API
const findPokeStats = () => {
  //combining search input with pokemon API
  let input = search.value
  combinedFindLink = pokeApi + input
  axios.get(combinedFindLink).then((response) => {
    createRandomCard(response)
  })
}

createFindCard = (data) => {
  console.log(data)
  const renderName = data.name
  const renderId = data.id
  const renderImage = data.sprites.other.dream_world.front_default
  const renderHP = data.stats[0].base_stat
  const renderAttack = data.stats[1].base_stat
  const renderDefense = data.stats[2].base_stat
  const renderSpeed = data.stats[5].base_stat
  const typeOne = data.types[0].type.name

  //Found a wierd way to append data, inspired from TMDB lab/hw
  pokemonCard.innerHTML = `<div id="pokemon-card">
  <div> <img id="poke-image" src="${renderImage}"/></div>
  <div class="poke-name">${renderName}</div>
   <div id="id"><span>#</span>${renderId}</div> 
   <div id="hp-num">${renderHP}</div> 
   <div id="hp">HP</div>
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
  <div id="type"> 
  <h4 id="type-attribute">${typeOne}</h4>
  <p id="type-text">type</p>
</div>
</div>
</div>
  `
}

//click to generate random pokemon card
randomBtn.addEventListener("click", randomPokeStats)
//click to search for specific pokemon
findBtn.addEventListener("click", findPokeStats)
