import React, { FC, useState } from "react";
import { View } from "react-native";
import { IRoute } from "../../types/IRoute";
import styles from "./styles";

//containers
import LeftContainer from "./LeftContainer";
import MapContainer from "./MapContainer";
import RightContainer from "./RightContainer";
import TimelineContainer from "./TimelineContainer";

interface Props {
  data: IRoute[];
}

const Flight: FC<Props> = (props: Props) => {
  const [valueTimeline, setValueTimeline] = useState<number | any>(0);

  const handleCallback = (childData: number) => {
    setValueTimeline(childData);
  };

  const handleCall = handleCallback.bind(this);

  return (
    <View style={styles.container}>
      <LeftContainer />
      <View style={{ flexDirection: "column" }}>
        <MapContainer timestampValue={valueTimeline} data={props.data} />
        <TimelineContainer callbackValue={handleCall} data={props.data} />
      </View>
      <RightContainer />
    </View>
  );
};
export default Flight;
