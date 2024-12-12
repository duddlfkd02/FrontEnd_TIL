import CityDetail from "./components/CityDetail.js";
import CityList from "./components/CityList.js";
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
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

  this.state = {
    startIdx: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: window.location.pathname.replace("/", ""),
    cities: "",
    currentPage: window.location.pathname,
  };

  // 조건부 렌더링 함수
  const render = () => {
    const path = this.state.currentPage;
    $app.innerHTML = "";
    if (path.startsWith("/city")) {
      renderHeader();
      renderCityDetail();
    } else {
      renderHeader();
      renderCityList();
      renderRegionList();
    }
  };

  // 헤더
  const renderHeader = () => {
    new Header({
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
  };

  const renderRegionList = () => {
    new RegionList({
      $app,
      initialState: this.state.region,
      handleRegion: async (region) => {
        history.pushState(null, null, `${region}?sort=total`);
        const cities = await requestData(0, region, "total");
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: "total",
          region: region,
          searchWord: "",
          cities: cities,
        });
      },
    });
  };

  // 도시 리스트
  const renderCityList = () => {
    new CityList({
      $app,
      initialState: this.state.cities,
      handleItemClick: async (id) => {
        history.pushState(null, null, `/city/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/city/${id}`,
        });
      },

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
            ...this.state.cities,
            cities: [...this.state.cities.cities, ...newCities.cities],
            isEnd: newCities.isEnd,
          },
        });
      },
    });
  };

  const renderCityDetail = () => {
    new CityDetail();
  };

  // 현재 상태 업데이트 함수
  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  // 앞뒤 이동
  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname;

    const prevRegion = urlPath.replace("/", "");
    const prevPage = urlPath;
    const prevSortBy = getSortBy();
    const prevSearchWord = getSearchWord();
    const prevStartIdx = 0;
    const prevCities = await requestData(
      prevStartIdx,
      prevRegion,
      prevSortBy,
      prevSearchWord
    );

    this.setState({
      ...this.state,
      startIdx: prevStartIdx,
      sortBy: prevSortBy,
      region: prevRegion,
      searchWord: prevSearchWord,
      cities: prevCities,
      currentPage: prevPage,
    });
  });

  const init = async () => {
    const path = this.state.currentPage;
    if (!path.startsWith("/city")) {
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
    } else {
      render();
    }
  };

  init();
}
