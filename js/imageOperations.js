console.log("Starts");

// const fetchImage = async (apiUrl, className) => {
//   console.log("Called");
//   apiUrl = "localhost:3000/" + apiUrl;
//   const element = document.querySelector(className);
//   console.log(element);
//   const response = await fetch(apiUrl).then((response) => {
//     const newElement = `<img class="hero-main-image" src=${response}>`;
//     element.appendChild(newElement);
//   });
// };

(async () => {
  console.log("Called");
  apiUrl = "http://127.0.0.1:3000" + "/herobg";
  console.log(apiUrl);
  const element = document.querySelector(".hero");
  console.log(element);
  const response = await fetch(apiUrl)
    .then((res) => {
      console.log("Res 1", res);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(response);
  return response;
}).then((res) => {
  console.log("Res 2", result);
  const newElement = `<img class="hero-main-image" src=${result}>`;
  element.appendChild(newElement);
  return result;
})();

// const loadHeroImage = () => {
//   const currentElement = document.querySelector(".hero-image");
//   currentElement.
// };
