export default function CityList({ $app, initialState }) {
  this.state = initialState;
  this.target = document.createElement("div");
  this.target.className = "city-list";

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
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
