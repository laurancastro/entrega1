const printCards = (data, container) => {

  data.forEach((card) => {
    const {id, name, status, species, location, episode} = card;

    const div = document.createElement("div");

    div.classList.add("cards");
    div.innerHTML = 
		`<img src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg" alt="">
		<div class="info">
			<h5>${name}</h5>
			<p> ${status} - ${species}</p>
			<h6 class="subtitle">Last known location:</h6>
			<p>${location.name}</p>
			<h6 class="subtitle">First seen in:</h6>
			<p>${episode[0].name}</p>
		</div>`;
    container.appendChild(div);
  });
};

export default printCards;
