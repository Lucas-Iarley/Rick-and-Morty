// REQUISIÇÃO DA API DO RICK AND MORTY
fetch('https://rickandmortyapi.com/api/character', {
	method: 'GET'


})
.then(response => response.json())
.then(function(json){

	var container = document.querySelector('.container');

	console.log(json)

	json.results.map(function(results){

		container.innerHTML+= `
			<div class="itens">
				<img src=` + results.image + `>
				<strong>`+ results.name + `</strong>
				<p>` + results.location.name + `</p>
				<p>` + results.origin.name + `</p>
				<p>` + results.species + `</p>
				<p>` + results.status + `</p>
			 </div>
			 
		`
	
	})

})
