//Global Variables
const pokeApi = `https://pokeapi.co/api/v2/pokemon/`

//Buttons & div wrap
const container = document.getElementById("container")
const pokemonCard = document.getElementById("pokemon-card")
const randomBtn = document.getElementById("random")
const findBtn = document.getElementById("find")
const search = document.getElementById("search")
const title = document.getElementById("title")
const allPokemonBtn = document.getElementById("all-pokemon")
const allPokemonlist = document.getElementById("all-pokemon-list")

//Dark Mode variables
const darkModeOnOffBtn = document.getElementById("dark-mode-on-off")
const body = document.getElementById("body")

//Colors by pokemon type
let bug =
  "linear-gradient(0deg, rgba(254,255,240,1) 0%, rgba(168,184,32,1) 100%)"
let dragon =
  "linear-gradient(0deg, rgba(221,208,255,1) 0%, rgba(112,56,248,1) 100%)"
let electric =
  "linear-gradient(0deg, rgba(255,251,236,1) 0%, rgba(248,208,48,1) 100%)"
let fairy =
  "linear-gradient(0deg, rgba(244,223,245,1) 0%, rgba(238,153,172,1) 100%)"
let fighting =
  "linear-gradient(0deg, rgba(255,227,225,1) 0%, rgba(192,48,40,1) 100%)"
let fire =
  "linear-gradient(0deg, rgba(255,240,230,1) 0%, rgba(240,128,48,1) 100%)"
let flying =
  "linear-gradient(0deg, rgba(243,240,255,1) 0%, rgba(168,144,240,1) 100%)"
let grass =
  "linear-gradient(0deg, rgba(245,255,240,1) 0%, rgba(120,200,80,1) 100%)"
let ground =
  "linear-gradient(0deg, rgba(255,241,201,1) 0%, rgba(172,123,20,1) 100%)"
let ghost =
  "linear-gradient(0deg, rgba(255,251,240,1) 0%, rgba(112,88,152,1) 100%)"
let ice =
  "linear-gradient(0deg, rgba(240,255,254,1) 0%, rgba(152,216,216,1) 100%)"
let normal =
  "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(231,231,165,1) 100%)"
let poison =
  "linear-gradient(0deg, rgba(253,240,255,1) 0%, rgba(160,64,160,1) 100%)"
let psychic =
  "linear-gradient(0deg, rgba(255,230,238,1) 0%, rgba(248,88,136,1) 100%)"
let rock =
  "linear-gradient(0deg, rgba(255,251,232,1) 0%, rgba(113,105,70,1) 100%)"
let water =
  "linear-gradient(0deg, rgba(240,244,255,1) 0%, rgba(104,144,240,1) 100%)"

//click sound
let btnAudio = new Audio("audio.mp3")
let enterAudio = new Audio("obtain.mp3")

//create a random number b/w 1 - 150
const randomPokeStats = () => {
  let randomNum = Math.floor(Math.random() * 151) + 1

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
      pokemonCard.style.backgroundImage = fire
    }
  if (renderType === "water") {
    pokemonCard.style.backgroundImage = water
  }
  if (renderType === "bug") {
    pokemonCard.style.backgroundImage = bug
  }
  if (renderType === "dragon") {
    pokemonCard.style.backgroundImage = dragon
  }
  if (renderType === "electric") {
    pokemonCard.style.backgroundImage = electric
  }
  if (renderType === "fairy") {
    pokemonCard.style.backgroundImage = fairy
  }
  if (renderType === "fighting") {
    pokemonCard.style.backgroundImage = fighting
  }
  if (renderType === "flying") {
    pokemonCard.style.backgroundImage = flying
  }
  if (renderType === "grass") {
    pokemonCard.style.backgroundImage = grass
  }
  if (renderType === "ground") {
    pokemonCard.style.backgroundImage = ground
  }
  if (renderType === "ghost") {
    pokemonCard.style.backgroundImage = ghost
  }
  if (renderType === "ice") {
    pokemonCard.style.backgroundImage = ice
  }
  if (renderType === "normal") {
    pokemonCard.style.backgroundImage = normal
  }
  if (renderType === "poison") {
    pokemonCard.style.backgroundImage = poison
  }
  if (renderType === "psychic") {
    pokemonCard.style.backgroundImage = psychic
  }
  if (renderType === "rock") {
    pokemonCard.style.backgroundImage = rock
  }

  //updating extracted data to html
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
  //Adjusting visual view to hide all pokemon list
  pokemonCard.style.display = "block"
  container.style.display = "block"
  allPokemonlist.style.display = "none"
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

  //for loop that will change background color based on type
  for (let i = 0; i < renderType.length; i++)
    if (renderType === "fire") {
      pokemonCard.style.backgroundImage = fire
    }
  if (renderType === "water") {
    pokemonCard.style.backgroundImage = water
  }
  if (renderType === "bug") {
    pokemonCard.style.backgroundImage = bug
  }
  if (renderType === "dragon") {
    pokemonCard.style.backgroundImage = dragon
  }
  if (renderType === "electric") {
    pokemonCard.style.backgroundImage = electric
  }
  if (renderType === "fairy") {
    pokemonCard.style.backgroundImage = fairy
  }
  if (renderType === "fighting") {
    pokemonCard.style.backgroundImage = fighting
  }
  if (renderType === "flying") {
    pokemonCard.style.backgroundImage = flying
  }
  if (renderType === "grass") {
    pokemonCard.style.backgroundImage = grass
  }
  if (renderType === "ground") {
    pokemonCard.style.backgroundImage = ground
  }
  if (renderType === "ghost") {
    pokemonCard.style.backgroundImage = ghost
  }
  if (renderType === "ice") {
    pokemonCard.style.backgroundImage = ice
  }
  if (renderType === "normal") {
    pokemonCard.style.backgroundImage = normal
  }
  if (renderType === "poison") {
    pokemonCard.style.backgroundImage = poison
  }
  if (renderType === "psychic") {
    pokemonCard.style.backgroundImage = psychic
  }
  if (renderType === "rock") {
    pokemonCard.style.backgroundImage = rock
  }
  //updating extracted data to html
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
  //Adjusting visual view to hide all pokemon list
  pokemonCard.style.display = "block"
  container.style.display = "block"
  allPokemonlist.style.display = "none"
}

//dark mode on/off
const darkModeOnOff = () => {
  if (body.className === "dark-mode") {
    body.style.background =
      "linear-gradient(0deg, rgba(255,204,221,1) 0%, rgba(190,204,255,1) 100%)"
    body.style.backgroundRepeat = "no-repeat"
    body.style.height = "100%"
    body.style.backgroundAttachment = "fixed"
    body.classList.remove("dark-mode")
    pokemonCard.style.boxShadow = `rgba(0, 0, 0, 0.4) 0px 5px 15px`
    randomBtn.style.color = "white"
    findBtn.style.color = "white"
    allPokemonBtn.style.color = "white"
  } else {
    body.className += "dark-mode"
    body.style.background = "#1A232B"
    body.style.backgroundRepeat = "no-repeat"
    pokemonCard.style.boxShadow = `
    1px 2px 4px 0px rgba(255,255,255,0.8),
    2px 4px 8px 0px rgba(255,255,255,0.8),
    2px 4px 16px 0px rgba(255,255,255,0.8)`
    title.style.textShadow = "0px 0px 6px rgba(255,255,255,0.8)"
    randomBtn.style.color = "rgb(255, 235, 107)"
    findBtn.style.color = "rgb(255, 235, 107)"
    allPokemonBtn.style.color = "rgb(255, 235, 107)"
  }
}

//getAllPokemon Api call
const callAllPokemon = async () => {
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  let results = res.data.results
  results.forEach((result) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
      .then((response) => {
        getAllPokemon(response)
      })
  })
}

//allPokemon function to generate data
getAllPokemon = (response) => {
  const renderName = response.data.name
  const renderId = response.data.id
  const renderImage = response.data.sprites.front_default

  const pokeImage = document.createElement("img")
  pokeImage.setAttribute("src", renderImage)
  pokeImage.className = "pokeImage"
  allPokemonlist.append(pokeImage)
  //Adjusting visual view to hide pokemonCard and container divs
  pokemonCard.style.display = "none"
  container.style.display = "none"
  allPokemonlist.style.display = "block"
}

//click to generate random pokemon card
randomBtn.addEventListener("click", randomPokeStats)

//click to search for specific pokemon
findBtn.addEventListener("click", findPokeStats)

//log random pokemon card every refresh
window.addEventListener("load", randomPokeStats)

//click to turn dark mode on/off
darkModeOnOffBtn.addEventListener("click", darkModeOnOff)

//click to see all Pokemon
allPokemonBtn.addEventListener("click", callAllPokemon)

//click sounds
randomBtn.addEventListener("click", (e) => {
  btnAudio.play()
})
findBtn.addEventListener("click", (e) => {
  btnAudio.play()
  search.value = ""
})
darkModeOnOffBtn.addEventListener("click", (e) => {
  btnAudio.play()
})
allPokemonBtn.addEventListener("click", (e) => {
  btnAudio.play()
})
