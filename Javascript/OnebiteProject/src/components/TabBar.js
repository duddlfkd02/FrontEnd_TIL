export default function TabBar({ $app, intialState, onClick }) {
  this.state = intialState;
  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);
  this.onClick = onClick;

  this.template = () => {
    let temp = `
      <div id="all">전체</div>
       <div id="penguin">펭귄</div>
       <div id="koala">코알라</div>
       <div id="panda">판다</div>`;
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    let $currentTab = document.getElementById(this.state);
    $currentTab && ($currentTab.className = "clicked");

    const $tabBar = this.$target.querySelectorAll("div");

    $tabBar.forEach((element) => {
      element.addEventListener("click", () => {
        console.log("클릭한 메뉴", element.id);
        onClick(element.id);
      });
    });
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render();
}
