import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// api
import { requestData, requestCityDetail } from "./components/api.js";

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
    region: window.location.pathname.replace("/", ""),
    cities: "",
    currentPage: window.location.pathname,
  };

  // 조건부 렌더 함수
  const render = async () => {
    const path = this.state.currentPage;
    $app.innerHTML = "";

    if (path.startsWith("/city/")) {
      const cityId = path.split("/city/")[1];
      renderHeader();
      renderCityDetail(cityId);
    } else {
      renderHeader();
      renderRegionList();
      renderCityList();
    }
  };

  // <<컴포넌트>>
  //헤더
  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        sortBy: this.state.sortBy,
        searchWord: this.state.searchWord,
        currentPage: this.state.currentPage,
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
  };

  //나라별 버튼
  const renderRegionList = () => {
    new RegionList({
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
          currentPage: `/${region}`,
        });
      },
    });
  };

  //나라 목록
  const renderCityList = () => {
    new CityList({
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
      handleItemClick: async (id) => {
        history.pushState(null, null, `/city/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/city/${id}`,
        });
      },
    });
  };

  //나라 상세페이지
  const renderCityDetail = async (cityId) => {
    try {
      const cityDetailData = await requestCityDetail(cityId);
      new CityDetail({ $app, initialState: cityDetailData });
    } catch (error) {
      console.log(error);
    }
  };

  // 페이지 앞뒤 이동
  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname;

    const prevRegion = urlPath.replace("/", "");
    const prevSortBy = getSortBy();
    const prevSearch = getSearchWord();
    const prevStartIndex = 0;
    const prevPage = urlPath;
    const prevCities = await requestData(
      prevStartIndex,
      prevRegion,
      prevSortBy,
      prevSearch
    );

    this.setState({
      ...this.state,
      startIndex: prevStartIndex,
      sortBy: prevSortBy,
      region: prevRegion,
      searchWord: prevSearch,
      cities: prevCities,
      currentPage: prevPage,
    });
  });

  // 상태 업데이트
  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  // 초깃값
  const init = async () => {
    const path = this.state.currentPage;

    if (!path.startsWith("/city/")) {
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
    } else {
      render();
    }
  };

  init();
}
