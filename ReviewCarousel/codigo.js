let reviews;
let slideIndex = 0;

const cargarStars = (stars) => {
  const calcularStar = [];

  for (let i = 0; i < Math.floor(stars); i++) {
    calcularStar.push(`<img src="imagenes/full-star.svg">`);
  }
  if (stars === 5) {
    return calcularStar.map((item) => item).join("");
  }
  if (Number.isInteger(stars)) {
    //El numero pasado es de numero entero
    for (let i = 0; i < 5 - stars; i++) {
      calcularStar.push(`<img src="imagenes/empty-star.svg">`);
    }
  } else {
    calcularStar.push(`<img src="imagenes/half-star.svg">`);
    for (let i = 0; i < 4 - Math.floor(stars); i++) {
      calcularStar.push(`<img src="imagenes/empty-star.svg">`);
    }
  }
  return calcularStar.map((item) => item).join("");
};

const cargarReview = (review) => {
  return `<div class="review">
    <div class="review__headshot">
    <img src="${review.headshot}" alt="${review.name}" />
    </div>
    <p class="review__name"><strong>${review.name}</strong></p>
    <p class="review__location">${review.location}</p>
    <div class="review__stars">
    ${cargarStars(review.stars)}
    </div>
    <p class="review__body">${review.body}</p>
    </div>`;
};

//1. Fetch de data de nuestra API
const fetchReviews = async () => {
  try {
    const respuesta = await fetch("reviews.json");
    const data = await respuesta.json();
    reviews = data;
    document.querySelector(".reviews").innerHTML = data
      .map(cargarReview)
      .join("");
    // console.log(data);
    //2. Parse de data y crear the 'review' divs
    // const arrayNombres = data.map((nombre) => nombre.name);
    // console.log(arrayNombres);
  } catch (error) {
    console.log("Hay un error", error);
  }
};
fetchReviews();

const moveSlider = () => {
  const btnDe = document.querySelector("#arrow--right");
  const btnIz = document.querySelector("#arrow--left");

  btnDe.onclick = (e) => {
    if (e.currentTarget.id.includes("right")) {
      slideIndex === reviews.length - 1 ? (slideIndex = 0) : slideIndex++;
    }
    document.querySelector(".reviews").style.transform = `translate(${
      -100 * slideIndex
    }%)`;
  };

  btnIz.onclick = (e) => {
    if (e.currentTarget.id.includes("left")) {
      slideIndex === 0 ? (slideIndex = reviews.length - 1) : slideIndex--;
    }
    document.querySelector(".reviews").style.transform = `translate(${
      -100 * slideIndex
    }%)`;
  };
};
moveSlider();


//3. A;adir event listeners para mover el slider de izquierda a derecha
