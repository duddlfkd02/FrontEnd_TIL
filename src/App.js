import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// api
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

  // 사용할 state 정의
  this.state = {
    startIndex: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: "",
    cities: "",
  };

  // <<컴포넌트>>
  //헤더
  const header = new Header({
    $app,
    initialState: {
      sortBy: this.state.sortBy,
      searchWord: this.state.searchWord,
    },
    handleSortChange: async (sortBy) => {
      const pageUrl = `/${this.state.region}?sort=${sortBy}`;
      history.pushState(
        null,
        null,
        this.state.searchWord
          ? pageUrl + `&search=${this.state.searchWord}`
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
        startIndex: 0,
        sortBy: sortBy,
        cities: cities,
      });
    },
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
        startIndex: 0,
        cities: cities,
        searchWord: searchWord,
      });
    },
  });

  //나라별 버튼
  const regionList = new RegionList({
    $app,
    initialState: this.state.region,
    handleRegion: async (region) => {
      history.pushState(null, null, `/${region}?sort=total`);
      const cities = await requestData(0, region, "total");
      this.setState({
        ...this.state,
        startIndex: 0,
        region: region,
        sortBy: "total",
        searchWord: "",
        cities: cities,
      });
    },
  });

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
    header.setState({
      sortBy: this.state.sortBy,
      searchWord: this.state.searchWord,
    });
    regionList.setState(this.state.region);
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
