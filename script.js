let cars = [];
let tenCars = [];
const div = document.querySelector("div");

fetch("https://striveschool-api.herokuapp.com/books")
  .then((gabriele) => {
    if (gabriele.ok) {
      return gabriele.json();
    } else {
      throw new Error("bad-request");
    }
  })
  .then((gabriele) => {
    console.log(gabriele);
    cars = gabriele;
    tenCars = cars.slice(0, 10);
    console.log(tenCars);
    addCardMachine();
  })
  .catch((e) => console.log("hai un errore " + e));

const addCardMachine = () => {
  cars.forEach((car) => {
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    img.setAttribute("src", car.img);
    h3.innerText = car.title;
    p.innerText = car.price;
    img.style.width = "100px";
    div.style.border = "1px solid black";
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
  });
};
// esempio di richiesta APIREST di tipo post
