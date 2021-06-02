import React, { FC, useEffect, useState } from "react";
import { IRoute } from "../../../types/IRoute";
import { Polyline, LatLng } from "react-native-maps";
import { COLORS } from "../../../config";

interface Props {
  data: IRoute[];
}

const PolylineContainer: FC<Props> = (props: Props) => {
  const [coords, setCoords] = useState<LatLng[]>([]);

  let coordsArr = props.data[0].route_points.map((point, index) => {
    return {
      latitude: point.lat,
      longitude: point.lng,
    };
  });

  useEffect(() => {
    setCoords(coordsArr);
  }, []);

  return (
    <Polyline
      strokeColors={[COLORS.blue]}
      strokeWidth={2}
      coordinates={coords}
    />
  );
};
export default PolylineContainer;
