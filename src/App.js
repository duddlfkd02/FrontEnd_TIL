import CityDetail from "./components/CityDetail.js";
import CityList from "./components/CityList.js";
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";

import { requestData } from "./components/api.js";

export default function App($app) {
  this.state = {
    startIdx: 0,
    sortBy: "",
    searchWord: "",
    region: "",
    cities: "",
  };

  const header = new Header();
  const regionList = new RegionList();
  const cityList = new CityList({
    $app,
    initialState: this.state.cities,
  });
  const cityDetail = new CityDetail();

  this.setState = (newState) => {
    this.state = newState;
    cityList.setState(this.state.cities);
  };

  const init = async () => {
    const cities = await requestData(
      this.state.startIdx,
      this.state.region,
      this.state.sortBy,
      this.state.searchWord
    );
    this.setState({
      ...this.state,
      cities: cities,
    });
  };

  init();
}
