
fetch ('https://pokeapi.co/api/v2/pokemon') // CONSUME UNA API, UNA URL EN ESTE CASO
    .then ( res => res.json())  // LA TRANSFORMAMOS EN JSON

    .then(data => {
        
        data.results.forEach(element => {
            console.log(element.name)
        });
    })

    .catch(error => console.log(error))