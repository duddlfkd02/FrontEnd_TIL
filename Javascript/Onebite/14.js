const API_URL = fetch("https://jsonplaceholder.typicode.com/users");
// .then((response) => response.json())
// .catch((error) => console.log(error));

const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
