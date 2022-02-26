// fetch("https://pokeapi.co/api/v2/pokemon") // CONSUME UNA API, UNA URL EN ESTE CASO
//   .then((res) => res.json()) // LA TRANSFORMAMOS EN JSON

//   .then((data) => {
//     data.results.forEach((element) => {
//       //   console.log(element.name);
//     });
//   })

//   .catch((error) => console.log(error));

// async await
const obtenerPokemons = async () => {
  try {
    // ESPERAMOS LA RESPUESTA DE FETCH
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await respuesta.json();
    console.log(data.results);
    const  nombres = data.results.forEach(element => {
        console.log(element.name)
    });
    console.log(nombres)
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemons()