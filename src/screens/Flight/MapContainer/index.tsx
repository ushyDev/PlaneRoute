import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import styles from "../styles";
import { IRoute } from "../../../types/IRoute";

//map
import { mapStyle } from "./mapStyle";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MAP_VIEW_INITIAL_REGION } from "../../../config";

//utils
import indexTimestampFn from "../../../utils/indexTimestamp";
import ratioCoords from "../../../utils/ratioCoords";

//containers
import PolylineContainer from "./PolylineContainer";
import MarkerContainer from "./MarkerContainer";

interface Props {
  data: IRoute[];
  timestampValue: number;
}

const MapContainer: FC<Props> = (props: Props) => {
  const data = props.data[0].route_points;
  const value = data[0].timestamp;
  const realValue = props.timestampValue + value;

  const [latMarker, setLatMarker] = useState(data[0].lat);
  const [lngMarker, setLngMarker] = useState(data[0].lng);
  let indexTimestamp: number = indexTimestampFn(data, realValue, value);

  useEffect(() => {
    setLatMarker(
      data[indexTimestamp].lat +
        (realValue - data[indexTimestamp].timestamp) *
          ratioCoords(data, indexTimestamp, "lat")
    );
    setLngMarker(
      data[indexTimestamp].lng +
        (realValue - data[indexTimestamp].timestamp) *
          ratioCoords(data, indexTimestamp, "lng")
    );
  }, [props.timestampValue]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={MAP_VIEW_INITIAL_REGION}
        style={styles.mapStyle}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: latMarker,
            longitude: lngMarker,
          }}
        />
        <PolylineContainer data={props.data} />
        <MarkerContainer data={props.data} />
      </MapView>
    </View>
  );
};
export default MapContainer;
