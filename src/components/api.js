const API_URL = "https://trip-wiki-api.vercel.app/";

export const requestData = async (startIndex, region, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;

    if (region && region !== "All") {
      url += `${region}?start=${startIndex}`;
    } else {
      url += `?start=${startIndex}`;
    }

    if (sortBy) {
      url += `&sort=${sortBy}`;
    }

    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    //API 호출하기
    const response = await fetch(url);
    if (response) {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
