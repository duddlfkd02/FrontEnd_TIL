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

  window.addEventListener("popstate", async () => {
    const tabName = window.location.pathname.replace("/", "" || "all");
    const photos = await request(tabName === "all" ? "" : tabName);
    this.setState({
      ...this.state,
      currentTab: tabName,
      photos: photos,
    });
    //console.log(window.location.pathname);
  });

  const init = async () => {
    try {
      const currentTab = this.state.currentTab;
      const initialPhotos = await request(
        currentTab === "all" ? "" : currentTab
      );
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  init();
}
