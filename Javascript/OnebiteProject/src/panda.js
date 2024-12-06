const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
let template = [];

const getData = async (name) => {
  const response = await fetch(`${API_URL}${name}`);
  try {
    if (response) {
      const data = await response.json();

      data.photos.map((photo) => {
        template += `<img src="${photo.url}"></img>`;
      });
      $content.innerHTML = template;
    }
  } catch (error) {
    console.log(error);
  }
};

getData("panda");
