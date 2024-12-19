const API_URL = "https://random-quote.hyobb.com/";
const quoteElement = document.getElementById("quote");
const quoteItem = localStorage.getItem("quote");

const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

const setQuote = (result) => {
  let quote = { createDate: `${month}-${date}`, quoteData: result };
  localStorage.setItem("quote", JSON.stringify(quote));
  quoteElement.textContent = `"${result}"`;
};

const getQuote = async () => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      // 응답이 성공적일 때만 처리
      const data = await response.json();
      console.log(data[1].respond);
      const result = data[1].respond;
      setQuote(result);
    } else {
      throw new Error(`HTTP error: ${response.status}`);
    }
  } catch (error) {
    console.log(`error : ${error}`);
    setQuote("만약 하루를 성공하고 싶다면, 반드시 첫 한 시간을 성공해야 한다.");
  }
};

if (quoteItem) {
  //localstorage에 quote가 있다면
  let { createDate, quoteData } = JSON.parse(quoteItem);
  if (createDate === `${month}-${date}`) {
    quoteElement.textContent = `"${quoteData}"`;
  } else {
    getQuote();
  }
} else {
  //localstorage에 quote가 없다면
  getQuote();
}
