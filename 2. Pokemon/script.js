const pokemonColor = {
    type :["grass", "water", "fire", "bug", "normal", "flying", "rock", "ground", "psychic", "ghost", "dark", "steel", "poison", "electric", "fairy", "fighting", "dragon", "ice"],
    bgColor:["8DD694", "8DC6E6", "E69D8D", "BDDD7A", "B1B1B1", "C9ADEC", "B99D72", "EFBE85", "D053BC", "835E94", "686868", "598FA3", "A55DB1", "E7C859", "EEA1E2", "E07F60", "8859D5", "71D8DE"],
    border:["5DAD65", "6F9ECA", "C67D6D", "A2C170", "959595", "A485CC", "957D59", "D0A068", "A44094", "6B4C79", "434343", "517C8B", "8A4A95", "D0B34A", "C77FBC", "B1664F", "724CAE", "65C1C6"]
}

async function get() {
    try {
        const responses = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36");
        const data = await responses.json();

        for (let i = 0; i < 36; i++) {
            const pokemonUrl = data.results[i].url;
            const response = await fetch(pokemonUrl);
            const pokemonData = await response.json();

            const div = document.createElement("div");
            div.classList.add("card");
            div.setAttribute("id", i);

            for (let j = 0; j < pokemonColor.type.length; j++) {
                if (pokemonData.types[0].type.name === pokemonColor.type[j]) {
                    div.style.backgroundColor = `#${pokemonColor.bgColor[j]}`;
                    div.style.borderColor = `#${pokemonColor.border[j]}`;
                    break;
                }
            }

            const top = `<p>${pokemonData.id} : ${pokemonData.name}</p>`;
            const image = `<img src="${pokemonData.sprites.front_default}">`;
            const bottom = `Type : ${pokemonData.types[0].type.name}`;

            div.innerHTML = top + image + bottom;

            document.querySelector(".container").appendChild(div);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
