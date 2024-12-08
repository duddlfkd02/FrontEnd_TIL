const API_URL = "https://animal-api-two.vercel.app/";

export const request = async (name) => {
  try {
    let response = await fetch(name ? `${API_URL}${name}` : API_URL);
    if (response) {
      let data = await response.json();
      console.log("불러오는 데이터 확인", data);
      return data.photos;
    }
  } catch (error) {
    console.log(error);
  }
};
