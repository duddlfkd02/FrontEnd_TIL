export default function CityList({ $app, initialState, handleLoadMore }) {
  this.state = initialState;
  this.target = document.createElement("div");
  this.target.className = "city-list";

  this.handleLoadMore = handleLoadMore;

  $app.appendChild(this.target);

  this.template = () => {
    let temp = `<div class="city-items-container">`;
    if (this.state) {
      this.state.cities.forEach((element) => {
        temp += `
          <div class="city-item" id=${element.id}>
            <img src=${element.image}></img>
            <div class="city-item-info">${element.city}, ${element.country}</div>
            <div class="city-item-score">⭐️ ${element.total}</div>
          </div>
        `;
      });
      temp += `</div>`;
    }
    return temp;
  };

  this.render = () => {
    this.target.innerHTML = this.template();

    if (!this.state.isEnd) {
      const loadMoreButton = document.createElement("button");
      loadMoreButton.className = "add-items-btn";
      loadMoreButton.textContent = "+ 더보기";

      this.target.appendChild(loadMoreButton);

      loadMoreButton.addEventListener("click", () => {
        this.handleLoadMore();
      });
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
