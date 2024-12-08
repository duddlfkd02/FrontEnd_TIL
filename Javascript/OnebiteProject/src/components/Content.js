export default function Content({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "content";

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = [];
    if (this.state) {
      this.state.forEach((element) => {
        temp += `<img src="${element.url} alt=${element.id}""></img>`;
      });
    }
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
