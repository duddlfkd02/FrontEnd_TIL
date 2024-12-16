//RegionList.js
export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "region-list";

  this.handleRegion = handleRegion;
  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      "🚀 All",
      "🌏 Asia",
      "🕌 Middle-East",
      "🇪🇺 Europe",
      "💃 Latin-America",
      "🐘 Africa",
      "🏈 North-America",
      "🏄 Oceania",
    ];
    let temp = ``;
    regionList.map((region) => {
      let regionId = region.split(" ")[1];
      temp += `<div id=${regionId}>${region}</div>`;
    });
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    if (this.state) {
      let $currentRegion = document.getElementById(this.state);
      $currentRegion && ($currentRegion.className = "clicked");
    } else {
      document.getElementById("All").className = "clicked";
    }

    const $regionList = this.$target.querySelectorAll("div");
    $regionList.forEach((region) => {
      region.addEventListener("click", () => {
        this.handleRegion(region.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
