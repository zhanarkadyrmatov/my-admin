/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
const YandexMaps = ({ setMapLatLon, mapLatLon }) => {
  const [position, setPosition] = useState(mapLatLon);
  const handleClick = (event) => {
    const coords = event.get("coords");
    setPosition(coords);
  };
  useEffect(() => {
    setMapLatLon(position);
  }, [position]);
  return (
    <YMaps
      style={{
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Map
        style={{
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          height: "100%",
        }}
        options={{ suppressMapOpenBlock: true }}
        defaultState={{
          center: position ? position : [42.875969, 74.603701],
          zoom: 9,
        }}
        onClick={handleClick}
        lang="en_US"
      >
        <ZoomControl options={{ float: "right" }} />
        {position && <Placemark geometry={position} />}
      </Map>
    </YMaps>
  );
};

export default YandexMaps;
