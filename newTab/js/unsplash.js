const BG_API_URL = "https://api.unsplash.com/photos/random";
const ACCESS_KEY = "he6pJxhJElL-x_124bUXg6JaxgJOhAgNUNUEyAb0Z64";

const setBackgroundImage = async () => {
  try {
    const response = await fetch(`${BG_API_URL}?client_id=${ACCESS_KEY}`);
    if (response.ok) {
      const data = await response.json();
      const imageUrl = data.urls.full;
      document.body.style.backgroundImage = `url(${imageUrl})`;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.log("배경이미지 불러오는데 오류 발생", error);
  }
};

setBackgroundImage();
