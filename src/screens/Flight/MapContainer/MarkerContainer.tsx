import React, { FC } from "react";
import { View } from "react-native";
import { IRoute } from "../../../types/IRoute";
import { Marker } from "react-native-maps";
import CustomMarker from "./CustomMarker";

interface Props {
  data: IRoute[];
}

const MarkerContainer: FC<Props> = (props: Props) => {
  return (
    <View>
      {props.data[0].route_points.map((point, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: point.lat,
            longitude: point.lng,
          }}
        >
          <CustomMarker />
        </Marker>
      ))}
    </View>
  );
};
export default MarkerContainer;
