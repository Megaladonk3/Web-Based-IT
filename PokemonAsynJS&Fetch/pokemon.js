function searchPokemon(){
    const input = document.getElementById("input");
    const pokemon = input.value.trim().toLowerCase();

    if(!pokemon){
        alert("Enter a Pokemon name or ID");
        return;
    }

    const cache = localStorage.getItem(pokemon);

    if(cache){
        const pokemondata = JSON.parse(cache);
        displayPokemon(pokemondata);
    }
    else{

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Pokemon not found");
            }

            return response.json();

        })
        .then(data => {
            localStorage.setItem(pokemon, JSON.stringify(data));
            displayPokemon(data);
        })
        .catch(error => {
            alert(error.message);
            console.error(error);
        });
    }
}

function displayPokemon(data){
    const picture = document.getElementById("image");
    picture.src = data.sprites.front_default;

    const audio = document.getElementById("cry");
    const audioPlayer = audio.parentElement;

    audio.src = data.cries.latest;
    audioPlayer.load();

    const moveSelector = document.querySelectorAll(".moves");
    const pokemonMoves = data.moves;

    moveSelector.forEach(select => {
        select.innerHTML = "";

        pokemonMoves.forEach(move => {
            const moveName = move.move.name;
            const option = document.createElement("option");

            option.value = moveName;
            option.textContent = moveName;

            select.appendChild(option);
        });
    });
}

function addPokemon(){
    const pokemonSprite = document.getElementById("image").src;

    const firstMove = document.getElementById("move1").value;
    const secondMove = document.getElementById("move2").value;
    const thirdMove = document.getElementById("move3").value;
    const fourthMove = document.getElementById("move4").value;

    const teamSection = document.getElementById("team");
    if(teamSection.classList.contains("hide")){
        teamSection.classList.remove("hide");
    }

    const myTeam = document.getElementById("myTeam");

    const teamMember = document.createElement("div");
    teamMember.classList.add("teamMembers");

    teamMember.innerHTML = `
        <div class="imageContainer">
            <img src="${pokemonSprite}" alt="Pokemon Picture">
        </div>
        <div class="movesList">
            <ul>
                <li>${firstMove}</li>
                <li>${secondMove}</li>
                <li>${thirdMove}</li>
                <li>${fourthMove}</li>
            </ul>
        </div>
    `;

    myTeam.appendChild(teamMember);
}
