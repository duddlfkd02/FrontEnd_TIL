export default function CityList() {
  this.target = document.createElement("div");
  this.target.className = "city-list";

  this.template = () => {};

  this.render = () => {};

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
