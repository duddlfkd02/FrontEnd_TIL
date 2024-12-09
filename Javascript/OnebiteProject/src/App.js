import { request } from "./components/api.js";
import Content from "./components/Content.js";
import TabBar from "./components/TabBar.js";

export default function App($app) {
  this.state = {
    currentTab: window.location.pathname.replace("/", "" || "all"),
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, name); // url 변경해주기
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name === "all" ? "" : name),
      });
    },
  });

  const content = new Content({ $app, initialState: [] });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    const currentTab = tabName === "all" ? "" : tabName;
    const photos = await request(currentTab);
    this.setState({
      ...this.state,
      currentTab: tabName,
      photos: photos,
    });
  };

  window.addEventListener("popstate", async () => {
    this.updateContent(window.location.pathname.replace("/", "" || "all"));
    //console.log(window.location.pathname);
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
