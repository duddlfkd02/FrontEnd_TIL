export default function ResionList() {
  this.target = document.createElement("div");
  this.target.className = "resion-list";

  this.template = () => {};

  this.render = () => {};

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
