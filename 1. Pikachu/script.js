async function get() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
        const data = await response.json();
        const top = `<p>${data.id} : ${data.name}</p>`;
        const image = `<img src="${data.sprites.front_default}">`;
        const bottom = `Type : ${data.types[0].type.name}`;

        document.getElementsByTagName("div")[0].classList.add("card");
        document.getElementsByTagName("div")[0].innerHTML = top + image + bottom;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
