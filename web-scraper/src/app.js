const feedDisplay = document.querySelector("#feed");

fetch("http://localhost:8000/results")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((chip) => {
      const chipItem = `<div id="green"><h3>${chip.title}</h3></div>`;
      feedDisplay.insertAdjacentHTML("beforeend", chipItem);
    });
  })
  .catch((err) => console.log(err));

// async componentDidMount() {
//     const url = "http://localhost:8000/results";
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         }
// }
