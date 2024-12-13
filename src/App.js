import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// api
import { requestData } from "./components/api.js";

export default function App($app) {
  // 사용할 state 정의
  this.state = {
    startIndex: 0,
    sortBy: "",
    searchWord: "",
    region: "",
    cities: "",
  };

  // <<컴포넌트>>
  //헤더
  const header = new Header();

  //나라별 버튼
  const regionList = new RegionList();

  //나라 목록
  const cityList = new CityList({
    $app,
    initialState: this.state.cities,
    handleLoadMore: async () => {
      const newStartIndex = this.state.startIndex + 40;
      const newCities = await requestData(
        newStartIndex,
        this.state.region,
        this.state.sortBy
      );
      this.setState({
        ...this.state,
        startIndex: newStartIndex,

        cities: {
          cities: [...this.state.cities.cities, ...newCities.cities],
          isEnd: newCities.isEnd,
        },
      });
    },
  });

  //나라 상세페이지
  const cityDetail = new CityDetail();

  // 상태 업데이트
  this.setState = (newState) => {
    this.state = newState;
    cityList.setState(this.state.cities);
  };

  // 초깃값
  const init = async () => {
    const cities = await requestData(
      this.state.startIndex,
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
