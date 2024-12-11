import CityDetail from "./components/CityDetail.js";
import CityList from "./components/CityList.js";
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";

import { requestData } from "./components/api.js";

export default function App($app) {
  const getSortBy = () => {
    if (window.location.search) {
      return window.location.search.split("sort=")[1].split("&")[0];
    }
    return "total";
  };

  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  this.state = {
    startIdx: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: "",
    cities: "",
  };

  // 헤더
  const header = new Header({
    $app,
    initialState: {
      sortBy: this.state.sortBy,
      searchWord: this.state.searchWord,
    },
    // 정렬 함수
    handleSortChange: async (sortBy) => {
      const pageUrl = `/${this.state.region}?sort=${sortBy}`;
      history.pushState(
        null,
        null,
        this.state.searchWord
          ? pageUrl + `$search=${this.state.searchWord}`
          : pageUrl
      );
      const cities = await requestData(
        0,
        this.state.region,
        sortBy,
        this.state.searchWord
      );
      this.setState({
        ...this.state,
        startIdx: 0,
        sortBy: sortBy,
        cities: cities,
      });
    },
    // 검색 함수
    handleSearch: async (searchWord) => {
      history.pushState(
        null,
        null,
        `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`
      );

      const cities = await requestData(
        0,
        this.state.region,
        this.state.sortBy,
        searchWord
      );

      this.setState({
        ...this.state,
        startIdx: 0,
        cities: cities,
        searchWord: searchWord,
      });
    },
  });

  const regionList = new RegionList();

  // 도시 리스트
  const cityList = new CityList({
    $app,
    initialState: this.state.cities,
    handleLoadMore: async () => {
      const newStartIdx = this.state.startIdx + 40;
      const newCities = await requestData(
        newStartIdx,
        this.state.region,
        this.state.sortBy
      );
      this.setState({
        ...this.state,
        startIdx: newStartIdx,
        cities: {
          cities: [...this.state.cities.cities, ...newCities.cities],
          isEnd: newCities.isEnd,
        },
      });
    },
  });

  const cityDetail = new CityDetail();

  // 현재 상태 업데이트 함수
  this.setState = (newState) => {
    this.state = newState;
    cityList.setState(this.state.cities);
    header.setState({
      sortBy: this.state.sortBy,
      searchWord: this.state.searchWord,
    });
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
