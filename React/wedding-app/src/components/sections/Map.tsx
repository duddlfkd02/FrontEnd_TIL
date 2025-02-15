import classNames from "classnames/bind";
import styles from "./Map.module.scss";
import Section from "../shared/Section";
import { useEffect, useRef } from "react";
import { Location } from "@/models/wedding";

const cx = classNames.bind(styles);

declare global {
  interface Window {
    kakao: any;
  }
}

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null);
  useEffect(() => {
    if (document.getElementById("kakao-map-script")) {
      console.log("Kakao 지도 API가 이미 로드되었습니다.");
      return;
    }

    const script = document.createElement("script");
    script.id = "kakao-map-script";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&autoload=false`;

    script.async = true; // 비동기로 가져오겠다!

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        console.log("Kakao 지도 API 로드 완료!");

        if (mapContainer.current) {
          const position = new window.kakao.maps.LatLng(
            location.lat,
            location.lng
          );

          const options = {
            center: position,
            level: 3,
          };

          const map = new window.kakao.maps.Map(mapContainer.current, options);
          const marker = new window.kakao.maps.Marker({ position });

          marker.setMap(map);
        } else {
          console.error("mapContainer가 정의되지 않았습니다.");
        }
      });
    };
  }, [location]);

  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("txt-title")}>오시는 길</span>
          <span className={cx("txt-subtitle")}>{location.name}</span>
          <span>{location.address}</span>
        </div>
      }
    >
      <div className={cx("wrap-map")}>
        <div className={cx("map")} ref={mapContainer}></div>
        <a href={location.link} className={cx("btn-find-way")} target="_blank">
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  );
}

function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode;
  list: string[];
}) {
  return (
    <div className={cx("wrap-waytocome")}>
      <div className={cx("text-label")}>{label}</div>
      <ul>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
