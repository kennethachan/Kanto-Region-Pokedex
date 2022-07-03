//Global Variables
const pokeApi = `https://pokeapi.co/api/v2/pokemon/`

//Buttons & div wrap
const pokemonCard = document.getElementById("pokemon-card")
const randomBtn = document.getElementById("random")
const findBtn = document.getElementById("find")
const search = document.getElementById("search")

const darkModeOnBtn = document.getElementById("dark-mode-on")
const body = document.getElementById("body")

//Colors by pokemon type
let bug = "#26de81"
let dragon = "#ffeaa7"
let electric = "#fed330"
let fairy = "#FF0069"
let fighting = "#30336b"
let fire = "#f0932b"
let flying = "#81ecec"
let grass = "#00b894"
let ground = "#EFB549"
let ghost = "#a55eea"
let ice = "#74b9ff"
let normal = "#95afc0"
let poison = "#6c5ce7"
let psychic = "#a29bfe"
let rock = "#2d3436"
let water = "#0190FF"

//create a random number b/w 1 - 150
const randomPokeStats = () => {
  let randomNum = Math.floor(Math.random() * 150) + 1

  //combining random number with pokemon API
  const combinedLink = pokeApi + randomNum

  //axios call to obtain pokemon API
  axios.get(combinedLink).then((response) => {
    createRandomCard(response)
  })
}

//Generate random card
const createRandomCard = (response) => {
  const renderName = response.data.name
  const renderId = response.data.id
  const renderImage = response.data.sprites.other.dream_world.front_default
  const renderHP = response.data.stats[0].base_stat
  const renderAttack = response.data.stats[1].base_stat
  const renderDefense = response.data.stats[2].base_stat
  const renderSpeed = response.data.stats[5].base_stat
  const renderType = response.data.types[0].type.name

  //for loop that will change background color based on type
  for (let i = 0; i < renderType.length; i++)
    if (renderType === "fire") {
      pokemonCard.style.backgroundColor = fire
    }
  if (renderType === "water") {
    pokemonCard.style.backgroundColor = water
  }
  if (renderType === "bug") {
    pokemonCard.style.backgroundColor = bug
  }
  if (renderType === "dragon") {
    pokemonCard.style.backgroundColor = dragon
  }
  if (renderType === "electric") {
    pokemonCard.style.backgroundColor = electric
  }
  if (renderType === "fairy") {
    pokemonCard.style.backgroundColor = fairy
  }
  if (renderType === "fighting") {
    pokemonCard.style.backgroundColor = fighting
  }
  if (renderType === "flying") {
    pokemonCard.style.backgroundColor = flying
  }
  if (renderType === "grass") {
    pokemonCard.style.backgroundColor = grass
  }
  if (renderType === "ground") {
    pokemonCard.style.backgroundColor = ground
  }
  if (renderType === "ghost") {
    pokemonCard.style.backgroundColor = ghost
  }
  if (renderType === "ice") {
    pokemonCard.style.backgroundColor = ice
  }
  if (renderType === "normal") {
    pokemonCard.style.backgroundColor = normal
  }
  if (renderType === "poison") {
    pokemonCard.style.backgroundColor = poison
  }
  if (renderType === "psychic") {
    pokemonCard.style.backgroundColor = psychic
  }
  if (renderType === "rock") {
    pokemonCard.style.backgroundColor = rock
  }

  // Found a wierd way to append data, inspired from TMDB lab/hw

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
    <h4 id="type-attribute">${renderType}</h4>
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
    createFindCard(response)
  })
}
//Generate searched pokemon card
createFindCard = (response) => {
  const renderName = response.data.name
  const renderId = response.data.id
  const renderImage = response.data.sprites.other.dream_world.front_default
  const renderHP = response.data.stats[0].base_stat
  const renderAttack = response.data.stats[1].base_stat
  const renderDefense = response.data.stats[2].base_stat
  const renderSpeed = response.data.stats[5].base_stat
  const renderType = response.data.types[0].type.name

  for (let i = 0; i < renderType.length; i++)
    if (renderType === "fire") {
      pokemonCard.style.backgroundColor = fire
    }
  if (renderType === "water") {
    pokemonCard.style.backgroundColor = water
  }
  if (renderType === "bug") {
    pokemonCard.style.backgroundColor = bug
  }
  if (renderType === "dragon") {
    pokemonCard.style.backgroundColor = dragon
  }
  if (renderType === "electric") {
    pokemonCard.style.backgroundColor = electric
  }
  if (renderType === "fairy") {
    pokemonCard.style.backgroundColor = fairy
  }
  if (renderType === "fighting") {
    pokemonCard.style.backgroundColor = fighting
  }
  if (renderType === "flying") {
    pokemonCard.style.backgroundColor = flying
  }
  if (renderType === "grass") {
    pokemonCard.style.backgroundColor = grass
  }
  if (renderType === "ground") {
    pokemonCard.style.backgroundColor = ground
  }
  if (renderType === "ghost") {
    pokemonCard.style.backgroundColor = ghost
  }
  if (renderType === "ice") {
    pokemonCard.style.backgroundColor = ice
  }
  if (renderType === "normal") {
    pokemonCard.style.backgroundColor = normal
  }
  if (renderType === "poison") {
    pokemonCard.style.backgroundColor = poison
  }
  if (renderType === "psychic") {
    pokemonCard.style.backgroundColor = psychic
  }
  if (renderType === "rock") {
    pokemonCard.style.backgroundColor = rock
  }
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
  <h4 id="type-attribute">${renderType}</h4>
  <p id="type-text">type</p>
</div>
</div>
</div>
  `
}

//dark mode on
const darkModeOn = () => {
  if (body.className === "dark-mode") {
    body.style.backgroundColor = "#dae0f3"
    body.classList.remove("dark-mode")
  } else {
    body.className += "dark-mode"
    body.style.backgroundColor = "black"
  }
}

//click to generate random pokemon card
randomBtn.addEventListener("click", randomPokeStats)

//click to search for specific pokemon
findBtn.addEventListener("click", findPokeStats)

//log random pokemon card every refresh
window.addEventListener("load", randomPokeStats)

//to turn dark mode on
darkModeOnBtn.addEventListener("click", darkModeOn)
